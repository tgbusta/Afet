import React, { useEffect, useState } from "react";
import { Container, Table, Dropdown, Button } from "react-bootstrap";
import SubmitRegion from "../Components/SubmitRegion";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

const RegionScreen = () => {
  const [regions, setRegions] = useState([]);
  const [disasterTypes, setDisasterTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

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
  }, []);

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

                <td>{moment(region.disaster_date).format("l")}</td>
                <td>
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
    </div>
  );
};

export default RegionScreen;
