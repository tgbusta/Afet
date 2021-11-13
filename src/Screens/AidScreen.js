import React, { useEffect, useState } from "react";
import { Container, Dropdown, Table, Button } from "react-bootstrap";
import SubmitAid from "../Components/SubmitAid";
import moment from "moment";

const AidScreen = () => {

  const [aids, setAids] = useState([]);
  const [regions, setRegions] = useState([]);
  const [donationtypes, setDonationtypes] = useState([]);

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
  }, []);

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
    </div>
  );
};

export default AidScreen;
