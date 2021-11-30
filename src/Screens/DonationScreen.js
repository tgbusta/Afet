import React, {useEffect, useState} from 'react'
import { Container, Table, Dropdown, Button, Modal, Form } from "react-bootstrap";
import SubmitDonation from '../Components/SubmitDonation';
import moment from "moment";
import { toast } from "react-toastify";

const DonationScreen = () => {

  const [donations, setDonations] = useState([]);
  const [regions, setRegions] = useState([]);
  const [donationtypes, setDonationtypes] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const callDonation = (x) => {
    donations.filter(z => z.donation_id === x).map((item, index) => (
      setEditTel(item.donor_tel),
      setEditEmail(item.donor_email),
      setEditRegion(item.region_id),
      setEditDontype(item.donation_type_id),
      setEditDate(item.donation_date),
      setEditID(item.donation_id)
    ))
    handleShow();
  }
  const putDonation = async (id) => {
    if(id > 0){
      let donationx = {
        don_new_tel: editTel,
        don_new_mail: editEmail,
        don_new_region_id: editRegion,
        don_new_don_type_id: editDontype,
        don_new_date: editDate
    }
      
      try {
        const putDonation = await fetch("http://localhost:5000/donations/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(donationx),
        });
        toast.success("Bağışa ait bilgiler başarıyla güncellendi");
        console.log(putDonation);
      } catch (e) {
        toast.error("Bağışa ait bilgiler güncellenemedi!");
      }
    }
    handleClose();
  }

//Bağış Bilgileri düzenlemek için oluşturulan state'ler
const [editID, setEditID] = useState(0);
const [editTel, setEditTel] = useState("");
const [editEmail, setEditEmail] = useState("");
const [editRegion, setEditRegion] = useState("");
const [editDontype, setEditDontype] = useState("");
const [editDate, setEditDate] = useState("");

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
}, [show]);


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

                  <td>{moment(donation.donation_date).format("DD-MM-YYYY")}</td>
                  
                  <td>
                  <Button className="mx-2" variant="outline-info"  onClick={() => callDonation(donation.donation_id)}>
                   Düzenle
                  </Button>
                    <Button variant="outline-danger" onClick={() => deleteDonation(donation.donation_id)}>Sil</Button>
                  </td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Container>   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bağış Bilgilerini Güncelle</Modal.Title>
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
            <Form.Label>Bağış Türü</Form.Label>
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
          <Button variant="success"  onClick={() => putDonation(editID)}>
            Değişiklikleri Kaydet
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default DonationScreen
