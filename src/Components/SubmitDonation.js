import React, { validated, useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FloatingLabel,
  Container,
  Toast
  } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const SubmitDonation = () => {
  const [validated, setValidated] = useState(false);
  const [donor_name, setDonor_name] = useState("");
  const [donor_surname, setDonor_surname] = useState("");
  const [donor_tckn, setDonor_tckn] = useState("");
  const [donor_year_of_birth, setDonor_year_of_birth] = useState("");
  const [donor_tel, setDonor_tel] = useState("");
  const [donor_email, setDonor_email] = useState("");
  const [donation_type_id, setDonation_type_id] = useState("");
  const [region_id, setRegion_id] = useState("");
  const [donation_date, setDonation_date] = useState("");

  const [donation_types, setDonation_types] = useState([]);
  const [regions, setRegions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notify = () => toast("Kimlik doğrulama işlemi başarısız oldu!");

    try {
      const body = {
        donor_name,
        donor_surname,
        donor_tckn,
        donor_year_of_birth,
        donor_tel,
        donor_email,
        donation_type_id,
        region_id,
        donation_date,
      };

      const kimlikdogrula = await fetch("http://localhost:5000/nvi/" + donor_name.toUpperCase()  + "/" + donor_surname.toUpperCase() + "/" + donor_year_of_birth + "/" + donor_tckn);
      const jsonData = await kimlikdogrula.json();
      console.log(jsonData.response.TCKimlikNoDogrulaResult);

      if(jsonData.response.TCKimlikNoDogrulaResult){
        const response = await fetch("http://localhost:5000/donations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        console.log(response);
        window.location.reload();
      }else{

//toastify


      }
    }

    catch (e) {
      console.error(e.message);
    }
  };


  const getDonation_types = async () => {
    try {
      const response = await fetch("http://localhost:5000/donationtypes");
      const jsonData = await response.json();

      setDonation_types(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const getRegions = async () => {
    try {
      const response = await fetch("http://localhost:5000/regions");
      const jsonData = await response.json();

      setRegions(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getRegions();
    getDonation_types();
  }, []);

  return (
    <Container>
      <h3 className="py-3">Bağış Kaydı Oluştur</h3>

      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomDonorName">
            <FloatingLabel
              controlId="floatingInput"
              label="Bağışçının Adı"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Bağışçının Adı"
                onChange={(e) => setDonor_name(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorSurname">
            <FloatingLabel
              controlId="floatingInput"
              label="Bağışçının Soyadı"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Bağışçının Soyadı"
                required
                onChange={(e) => setDonor_surname(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorIdNumber">
            <FloatingLabel
              controlId="floatingInput"
              label="TC Kimlik Numarası"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="TC Kimlik Numarası"
                required
                onChange={(e) => setDonor_tckn(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-4">
        <Form.Group as={Col} md="4" controlId="validationCustomYearOfBirth">
            <FloatingLabel
              controlId="floatingInput"
              label="Doğum Yılı"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Doğum Yılı"
                required
                onChange={(e) => setDonor_year_of_birth(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorTel">
            <FloatingLabel
              controlId="floatingInput"
              label="Telefon Numarası"
              className="mb-3"
            >
              <Form.Control
                type="tel"
                placeholder="Telefon Numarası"
                required
                onChange={(e) => setDonor_tel(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonorEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="EPosta"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="E-Posta Adresi"
                required
                onChange={(e) => setDonor_email(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomRegion">
            <FloatingLabel
              controlId="floatingInput"
              label="Bağış Bölgesi"
              className="mb-3"
            >
              <Form.Control
                as="select"
                placeholder="Bağış Bölgesi"
                required
                onChange={(e) => setRegion_id(e.target.value)}
              >
                <option value="" disabled selected></option>

                {regions.map((regions) => (
                  <option key={regions.region_id} value={regions.region_id}>
                    {regions.region_name}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomDonationAmount"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Bağış Türü"
              className="mb-3"
            >
              <Form.Control
                as="select"
                required
                onChange={(e) => setDonation_type_id(e.target.value)}
              >
                <option value="" disabled selected></option>

                {donation_types.map((donation_types) => (
                  <option
                    key={donation_types.donation_type_id}
                    value={donation_types.donation_type_id}
                  >
                    {donation_types.donation_type}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDonationDate">
            <FloatingLabel
              controlId="floatingInput"
              label="Bağış Tarihi"
              className="mb-3"
            >
              <Form.Control
                type="date"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setDonation_date(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="text-center pt-5">
          <FormGroup>
            <Button className="mb-5" variant="outline-success" onClick={handleSubmit}>
              Kaydet
            </Button>
          </FormGroup>
        </Row>
      </Form>
    </Container>
  );
};

export default SubmitDonation;
