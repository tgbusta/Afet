import React from 'react'
import {Container, Dropdown, Table} from 'react-bootstrap'
import SubmitAid from '../Components/SubmitAid'

const AidScreen = () => {
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
              <th scope="col">Yardım Tutarı</th>
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
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Column content</td>
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
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Column content</td>
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

export default AidScreen
