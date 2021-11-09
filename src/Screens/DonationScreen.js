import React, {useEffect, useState} from 'react'
import { Container, Table, Dropdown, Button } from "react-bootstrap";
import SubmitDonation from '../Components/SubmitDonation';
import moment from "moment";

const DonationScreen = () => {

  const [donations, setDonations] = useState([]);
  const [regions, setRegions] = useState([]);
  const [donationtypes, setDonationtypes] = useState([]);


  //delete donation
  const deleteDonation = async (id) => {
    try{
      const deleteDonation = await fetch('http://localhost:5000/donations/' + id, {
        method: "DELETE",
      })

      setDonations(donations.filter((donations) => donations.donation_id !== id));
    }catch (e) {
      console.error(e.message)
    }
};
 //get donation
const getDonations = async () => {
  try {
    const response = await fetch("http://localhost:5000/donations");
    const jsonData = await response.json();

    setDonations(jsonData);
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

useEffect(() => {
  getDonations();
  getRegions();
  getDonationtypes();
}, []);


    return (
        <div>
        <Container>
        <SubmitDonation />
      </Container>

      <Dropdown.Divider />

      <Container className="py-5">
      <h3>Yapılan Bağışlar</h3>
        <Table className="table table-secondary table-hover" responsive="md">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Bağışçı TCKN</th>
              <th scope="col">Bağışçı Adı</th>
              <th scope="col">Bağışçı Soyadı</th>
              <th scope="col">Afet Bölgesi</th>
              <th scope="col">Bağış Türü</th>
              <th scope="col">Bağış Tarihi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
          {donations.map( donation => (
                <tr key={donation.donation_id}>
                  <td>{donation.donation_id}</td>
                  <td>{donation.donor_tckn}</td>
                  <td>{donation.donor_name}</td>
                  <td>{donation.donor_surname}</td>
                  {regions
                  .filter((x) => x.region_id === donation.region_id)
                  .map((filtered) => (
                    <td key={donation.region_id}>{filtered.region_name}</td>
                  ))}

                  {donationtypes
                  .filter((x) => x.donation_type_id === donation.donation_type_id)
                  .map((filtered) => (
                    <td key={donation.region_id}>{filtered.donation_type}</td>
                  ))}

                  <td>{moment(donation.donation_date).format("l")}</td>
                  
                  <td>
                    <Button variant="outline-danger" onClick={() => deleteDonation(donation.donation_id)}>Sil</Button>
                  </td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Container>    
        </div>
    )
}

export default DonationScreen
