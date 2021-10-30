import React, {useEffect, useState} from 'react'
import {Container, Dropdown, Table} from 'react-bootstrap'
import SubmitAid from '../Components/SubmitAid'

const AidScreen = () => {

  const [aids, setAids] = useState([]);


  const deleteAid = async (id) => {
    try{
      const deleteAid = await fetch('http://localhost:5000/aids/' + id, {
        method: "DELETE"
      })

      setAids(aids.filter(aids => aids.aid_id !== id));
    }catch (e) {
      console.error(e.message)
    }
}

const getAids = async () => {
  try{
    const response = await fetch("http://localhost:5000/aids")
    const jsonData = await response.json();

    setAids(jsonData);
    
  }catch (e) {
    console.error(e.message)
  }
}

console.log(aids);

useEffect(() =>{
  getAids();
}, [])



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
          {aids.map( aid => (
                <tr key={aid.aid_id}>
                  <td>{aid.aid_id}</td>
                  <td>{aid.affected_name}</td>
                  <td>{aid.affected_surname}</td>
                  <td>{aid.region_id}</td>
                  <td>{aid.aid_date}</td>
                  <td>{aid.donation_type_id}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteAid(aid.aid_id)}>Sil</button>
                  </td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Container>    
        </div>
    )
}

export default AidScreen
