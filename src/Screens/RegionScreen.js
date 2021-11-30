import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Dropdown,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import SubmitRegion from "../Components/SubmitRegion";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

const RegionScreen = () => {
  const [regions, setRegions] = useState([]);
  const [disasters, setDisasters] = useState([]);
  const [disasterTypes, setDisasterTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const callRegion = (x) => {
    regions
      .filter((z) => z.region_id === x).map((item, index) => (
          setEditName(item.region_name),
          setEditType(item.disaster_type_id),
          setEditCity(item.city_id),
          setEditDistrict(item.district_id),
          setEditDate(item.disaster_date),
          setEditID(item.region_id)
        )
      );
    handleShow();
  };

  const putRegion = async (id) => {
    if (id > 0) {
      let regionx = {
        reg_new_name: editName,
        reg_new_disaster_type_id: editType,
        reg_new_city_id: editCity,
        reg_new_dist_id: editDistrict,
        reg_new_dis_date: editDate,
      };

      try {
        const putRegion = await fetch("http://localhost:5000/regions/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(regionx),
        });
        toast.success("Bölge bilgileri başarıyla güncellendi");
        console.log(putRegion);
      } catch (e) {
        toast.error("Bölge bilgileri güncellenemedi!");
      }
    }
    handleClose();
  };

  //Bölge Bilgileri düzenlemek için oluşturulan state'ler
  const [editID, setEditID] = useState(0);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editDistrict, setEditDistrict] = useState("");
  const [editDate, setEditDate] = useState("");

  //delete region

  const deleteRegion = async (id) => {
    try {
      const deleteRegion = await fetch("http://localhost:5000/regions/" + id, {
        method: "DELETE",
      });

      setRegions(regions.filter((regions) => regions.region_id !== id));
      toast.error("Bölge kaydı silindi!");
    } catch (e) {
      toast.error("Silme işlemi başarısız!");
    }
  };

  //get regions
  const getRegions = async () => {
    try {
      const response = await fetch("http://localhost:5000/regions");
      const jsonData = await response.json();

      setRegions(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  console.log(regions);

  //get disaster types
  const getDisasterTypes = async () => {
    try {
      const response = await fetch("http://localhost:5000/disastertypes");
      const jsonData = await response.json();

      setDisasterTypes(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };
  //get cities
  const getCities = async () => {
    try {
      const response = await fetch("http://localhost:5000/cities");
      const jsonData = await response.json();
      setCities(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  //get districts
  const getDistricts = async () => {
    try {
      const response = await fetch("http://localhost:5000/districts");
      const jsonData = await response.json();

      setDistricts(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getRegions();
    getDistricts();
    getCities();
    getDisasterTypes();
  }, [show]);

  return (
    <div>
      <Container>
        <SubmitRegion />
      </Container>

      <Dropdown.Divider />

      <Container className="py-5">
        <h3>Afet Bölgeleri</h3>
        <Table className="table table-secondary table-hover" responsive="md">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Bölge Adı</th>
              <th scope="col">İl</th>
              <th scope="col">İlçe</th>
              <th scope="col">Afet Türü</th>
              <th scope="col">Afet Tarihi</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region) => (
              <tr key={region.region_id}>
                <td>{region.region_id}</td>
                <td>{region.region_name}</td>
                {cities
                  .filter((x) => x.city_id === region.city_id)
                  .map((filtered) => (
                    <td key={region.region_id}>{filtered.city}</td>
                  ))}
                {districts
                  .filter((x) => x.district_id === region.district_id)
                  .map((filtered) => (
                    <td key={region.region_id}>{filtered.district}</td>
                  ))}
                {disasterTypes
                  .filter((x) => x.disaster_type_id === region.disaster_type_id)
                  .map((filtered) => (
                    <td key={region.region_id}>{filtered.disaster_type}</td>
                  ))}

                <td>{moment(region.disaster_date).format("DD-MM-YYYY")}</td>
                <td>
                  <Button
                    className="mx-2"
                    variant="outline-info"
                    onClick={() => callRegion(region.region_id)}
                  >
                    Düzenle
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteRegion(region.region_id)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ToastContainer newestOnTop closeOnClick />
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Afet Bölgesi Bilgilerini Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Afet Bölgesi Adı</Form.Label>
              <Form.Control
                type="text"
                onChange={(r) => setEditName(r.target.value)}
                defaultValue={editName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Afet Türü</Form.Label>
              <Form.Control
                as="select"
                onChange={(r) => setEditType(r.target.value)}
                defaultValue={editType}
              >
                <option value="" disabled selected></option>

                {disasterTypes.map((disaster_types) => (
                  <option
                    key={disaster_types.disaster_type_id}
                    value={disaster_types.disaster_type_id}
                  >
                    {disaster_types.disaster_type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Afet İli</Form.Label>
              <Form.Control
                as="select"
                onChange={(r) => setEditCity(r.target.value)}
                defaultValue={editCity}
              >
                <option value="" disabled selected></option>
                {cities.map((cities) => (
                  <option key={cities.city_id} value={cities.city_id}>
                    {cities.city}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Afet İlçesi</Form.Label>
              <Form.Control
                as="select"
                onChange={(r) => setEditDistrict(r.target.value)}
                defaultValue={editDistrict}
              >
                <option value="" disabled selected></option>
                {districts.map((districts) => (
                  <option
                    key={districts.district_id}
                    value={districts.district_id}
                  >
                    {districts.district}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Afet Tarihi</Form.Label>
              <Form.Control
                type="date"
                aria-describedby="inputGroupPrepend"
                onChange={(r) => setEditDate(r.target.value)}
                defaultValue={editDate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Vazgeç
          </Button>
          <Button variant="success" onClick={() => putRegion(editID)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegionScreen;
