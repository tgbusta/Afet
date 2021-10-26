import React from "react";
import { Container, Table, Dropdown } from "react-bootstrap";
import SubmitRegion from "../Components/SubmitRegion";
const RegionScreen = () => {
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
  );
};

export default RegionScreen;
