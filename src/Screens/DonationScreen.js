import React, {useEffect, useState} from 'react'
import { Container, Table, Dropdown } from "react-bootstrap";
import SubmitDonation from '../Components/SubmitDonation';

const DonationScreen = () => {

  const [donations, setDonations] = useState([]);

  const deleteDonation = async (id) => {
    try{
      const deleteDonation = await fetch('http://localhost:5000/donations/' + id, {
        method: "DELETE"
      })

      setDonations(donations.filter(aids => donations.donation_id !== id));
    }catch (e) {
      console.error(e.message)
    }
}



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
              <th scope="col">Bağışçı Adı/Unvanı</th>
              <th scope="col">Afet Bölgesi</th>
              <th scope="col">Bağış Türü</th>
              <th scope="col">Bağış Tarihi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
          {donations.map( donation => (
                <tr key={donation.donation_id}>
                  <td>{donation.donor_title}</td>
                  <td>{donation.donor_name}</td>
                  <td>{donation.donor_surname}</td>
                  <td>{donation.region_id}</td>
                  <td>{donation.donation_type_id}</td>
                  <td>{donation.donation_date}</td>
                  <td>{donation.aid_date}</td>
                  <td>{donation.donation_type_id}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteDonation(donation.donation_id)}>Sil</button>
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
