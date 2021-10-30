import React, {useEffect, useState} from "react";
import { Container, Table, Dropdown } from "react-bootstrap";
import SubmitRegion from "../Components/SubmitRegion";


const RegionScreen = () => {

  const [regions, setRegions] = useState([]);
  
  //delete region

  const deleteRegion = async (id) => {
    try{
      const deleteRegion = await fetch('http://localhost:5000/regions/' + id, {
        method: "DELETE"
      })

      setRegions(regions.filter(regions => regions.region_id !== id));
    }catch (e) {
      console.error(e.message)
    }
}

  //get regions
  const getRegions = async () => {
    try{
      const response = await fetch("http://localhost:5000/regions")
      const jsonData = await response.json();

      setRegions(jsonData);
      
    }catch (e) {
      console.error(e.message)
    }
  }

  console.log(regions);

  useEffect(() =>{
    getRegions();
  }, [])
   
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
          {regions.map( region => (
                <tr key={region.region_id}>
                  <td>{region.region_id}</td>
                  <td>{region.region_name}</td>
                  <td>{region.city_id}</td>
                  <td>{region.district_id}</td>
                  <td>{region.disaster_type_id}</td>
                  <td>{region.disaster_date}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteRegion(region.region_id)}>Sil</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RegionScreen;
