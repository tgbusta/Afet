import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  FormGroup,
  Col,
  Row,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const SubmitAid = () => {
  const [validated, setValidated] = useState(false);

  const [region_id, setRegion_id] = useState("");
  const [donation_type_id, setDonation_type_id] = useState("");
  const [aid_date, setAid_date] = useState("");
  const [affected_name, setAffected_name] = useState("");
  const [affected_surname, setAffected_surname] = useState("");
  const [affected_tckn, setAffected_tckn] = useState("");
  const [affected_email, setAffected_email] = useState("");
  const [affected_tel, setAffected_tel] = useState("");
  const [affected_year_of_birth, setAffected_year_of_birth] = useState("");

  const [regions, setRegions] = useState([]);
  const [donation_types, setDonationTypes] = useState([]);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    console.log("submit");
    if(validated){
    e.preventDefault();
    try {
      const body = {
        region_id,
        donation_type_id,
        aid_date,
        affected_name,
        affected_surname,
        affected_tckn,
        affected_email,
        affected_tel,
        affected_year_of_birth,
      };
      console.log(body);

      const kimlikdogrula = await fetch(
        "http://localhost:5000/nvi/" +
          affected_name.toUpperCase() +
          "/" +
          affected_surname.toUpperCase() +
          "/" +
          affected_year_of_birth +
          "/" +
          affected_tckn
      );
      const jsonData = await kimlikdogrula.json();
      console.log(jsonData.response.TCKimlikNoDogrulaResult);

      if (jsonData.response.TCKimlikNoDogrulaResult) {
        const response = await fetch("http://localhost:5000/aids", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        console.log(response);
        toast.success("Yardım kaydı başarılı şekilde oluşturuldu.");
        setTimeout(() => window.location.reload(), 5000);
      } else {
        toast.error("TC Kimlik Numarası doğrulaması başarısız oldu!");
      }
    } catch (e) {
      toast.error("Yardım kaydı oluşturulamadı!");
    }
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

  const getDonationTypes = async () => {
    try {
      const response = await fetch("http://localhost:5000/donationtypes");
      const jsonData = await response.json();

      setDonationTypes(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getRegions();
    getDonationTypes();
  }, []);

  return (
    <Container>
      <h3 className="py-3">Yardım Kaydı Oluştur</h3>
      <Form noValidate validated={validated}>
        <Row className="my-3">
          <Form.Group as={Col} md="4" controlId="validationCustomAidName">
            <Form.Label>Afetzedenin Adı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Afetzedenin adını giriniz."
              onChange={(e) => setAffected_name(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidSurname">
            <Form.Label>Afetzedenin Soyadı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Afetzedenin soyadını giriniz."
              onChange={(e) => setAffected_surname(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomAidIdentityNumber"
          >
            <Form.Label>TC Kimlik Numarası</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Afetzedeye ait TC Kimlik Numarasını giriniz."
              onChange={(e) => setAffected_tckn(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomAidBirthYear">
            <Form.Label>Doğum Yılı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Afetzedenin doğum yılını giriniz."
              onChange={(e) => setAffected_year_of_birth(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidTel">
            <Form.Label>Telefon Numarası</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="(5--) --- -- --"
              onChange={(e) => setAffected_tel(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidEmail">
            <FloatingLabel>E-Posta Adresi</FloatingLabel>
            <Form.Control
              type="email"
              placeholder="---@---.---"
              onChange={(e) => setAffected_email(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Geçerli bir e-posta adresi giriniz.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomRegion">
            <Form.Label>Afet Bölgesi</Form.Label>
            <Form.Control
              required
              as="select"
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
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidAmount">
            <Form.Label>Yardım Türü</Form.Label>
            <Form.Control
              required
              as="select"
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
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidDate">
            <Form.Label>Yardım Tarihi</Form.Label>
            <Form.Control
              required
              type="date"
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setAid_date(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="text-center pt-5">
          <FormGroup>
            <Button
              className="mb-5"
              variant="outline-success"
              onClick={handleSubmit}
            >
              Kaydet
            </Button>
          </FormGroup>
        </Row>
      </Form>
      <ToastContainer newestOnTop closeOnClick />
    </Container>
  );
};

export default SubmitAid;
