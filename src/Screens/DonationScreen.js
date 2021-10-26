import React from 'react'
import { Container, Table, Dropdown } from "react-bootstrap";
import SubmitDonation from '../Components/SubmitDonation';

const DonationScreen = () => {
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
              <th scope="col">Bağış Tutarı</th>
              <th scope="col">Bağış Tarihi</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>

              
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
          </tbody>
        </Table>
      </Container>    
        </div>
    )
}

export default DonationScreen
