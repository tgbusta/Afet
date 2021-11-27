import React, { useEffect, useState } from "react";
import { Container, Dropdown, Table, Button, Modal, Form } from "react-bootstrap";
import SubmitAid from "../Components/SubmitAid";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

const AidScreen = () => {

  const [aids, setAids] = useState([]);
  const [regions, setRegions] = useState([]);
  const [donationtypes, setDonationtypes] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const callAid = (x) => {
    aids.filter(z => z.aid_id === x).map((item, index) => (
      setEditTel(item.affected_tel),
      setEditEmail(item.affected_email),
      setEditRegion(item.region_id),
      setEditDontype(item.donation_type_id),
      setEditDate(item.aid_date),
      setEditID(item.aid_id)
    ))
    handleShow();
  }
  const putAid = async (id) => {
    if(id > 0){
      let aidx = {
        aid_new_tel: editTel,
        aid_new_email: editEmail,
        aid_new_region: editRegion,
        aid_new_dontype: editDontype,
        aid_new_date: editDate
    }
      
      try {
        const putAid = await fetch("http://localhost:5000/aids/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(aidx),
        });
        toast.success("Yardıma ait bilgiler başarıyla güncellendi");
        console.log(putAid);
      } catch (e) {
        toast.error("Yardıma ait bilgiler güncellenemedi!");
      }
    }
    handleClose();
  }


  //Yardım Bilgileri düzenlemek için oluşturulan state'ler
  const [editID, setEditID] = useState(0);
  const [editTel, setEditTel] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRegion, setEditRegion] = useState("");
  const [editDontype, setEditDontype] = useState("");
  const [editDate, setEditDate] = useState("");

  //delete aid
  const deleteAid = async (id) => {
    try {
      const deleteAid = await fetch("http://localhost:5000/aids/" + id, {
        method: "DELETE",
      });

      setAids(aids.filter((aids) => aids.aid_id !== id));
    } catch (e) {
      console.error(e.message);
    }
  };

  //get aid
  const getAids = async () => {
    try {
      const response = await fetch("http://localhost:5000/aids");
      const jsonData = await response.json();

      setAids(jsonData);
    } catch (e) {
      console.error(e.message);
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
  //get donation types
  const getDonationtypes = async () => {
    try {
      const response = await fetch("http://localhost:5000/donationtypes");
      const jsonData = await response.json();
      setDonationtypes(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  console.log(donationtypes);

  useEffect(() => {
    getAids();
    getRegions();
    getDonationtypes();
  }, [show]);

  return (
    <div>
      <Container>
        <SubmitAid />
      </Container>

      <Dropdown.Divider />

      <Container className="py-5">
        <h3>Yapılan Yardımlar</h3>
        <Table className="table table-secondary table-hover" responsive="md">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Adı</th>
              <th scope="col">Soyadı</th>
              <th scope="col">Afet Bölgesi</th>
              <th scope="col">Yardım Tarihi</th>
              <th scope="col">Yardım Türü</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {aids.map((aid) => (
              <tr key={aid.aid_id}>
                <td>{aid.aid_id}</td>
                <td>{aid.affected_name}</td>
                <td>{aid.affected_surname}</td>
                {regions
                  .filter((x) => x.region_id === aid.region_id)
                  .map((filtered) => (
                    <td key={aid.region_id}>{filtered.region_name}</td>
                  ))}
                <td>{moment(aid.aid_date).format("DD-MM-YYYY")}</td>
                {donationtypes
                  .filter((x) => x.donation_type_id === aid.donation_type_id)
                  .map((filtered) => (
                    <td key={aid.region_id}>{filtered.donation_type}</td>
                  ))}
                <td>
                <Button className="mx-2" variant="outline-info"  onClick={() => callAid(aid.aid_id)}>
                   Düzenle
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteAid(aid.aid_id)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yardım Bilgilerini Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Telefon Numarası</Form.Label>
            <Form.Control type="tel" onChange={r => setEditTel(r.target.value)} defaultValue={editTel} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-Posta Adresi</Form.Label>
            <Form.Control type="email" onChange={r => setEditEmail(r.target.value)} defaultValue={editEmail} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Afet Bölgesi</Form.Label>
            <Form.Control as="select" onChange={r => setEditRegion(r.target.value)} defaultValue={editRegion} ><option value="" disabled selected></option>
              {regions.map((regions) => (
                <option key={regions.region_id} value={regions.region_id}>
                  {regions.region_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yardım Türü</Form.Label>
            <Form.Control as="select" onChange={r => setEditDontype(r.target.value)} defaultValue={editDontype} >
              <option value="" disabled selected></option>
              {donationtypes.map((donationtypes) => (
                <option
                  key={donationtypes.donation_type_id}
                  value={donationtypes.donation_type_id}
                >
                  {donationtypes.donation_type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yardım Tarihi</Form.Label>
            <Form.Control type="date" onChange={r => setEditDate(r.target.value)} defaultValue={editDate} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Vazgeç
          </Button>
          <Button variant="success"  onClick={() => putAid(editID)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AidScreen;
