import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, FormGroup, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const SubmitRegion = () => {
  const [cities, setCities] = useState([]);
  const [city_id, setCity_id] = useState("");
  const [region_name, setRegion_name] = useState("");
  const [disaster_date, setDisaster_date] = useState("");
  const [district_id, setDistrict_id] = useState("");
  const [districts, setDistricts] = useState([]);
  const [disasters, setDisasters] = useState([]);
  const [disaster_type_id, setDisaster_type_id] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    console.log("submit");

    e.preventDefault();
    try {
      const body = {
        disaster_type_id,
        city_id,
        region_name,
        disaster_date,
        district_id,
      };
      console.log(body);
      const response = await fetch("http://localhost:5000/regions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      toast.success("Bölge kaydı başarılı şekilde oluşturuldu.");
      setTimeout(() => window.location.reload(), 5000);
    } catch (e) {
      console.error(e.message);
      toast.error("Bölge kaydı oluşturulamadı!");
    }
  };

  const getCities = async () => {
    try {
      const response = await fetch("http://localhost:5000/cities");
      const jsonData = await response.json();

      setCities(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const getDisasterTypes = async () => {
    try {
      const response = await fetch("http://localhost:5000/disastertypes");
      const jsonData = await response.json();

      setDisasters(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  const getDistricts = async () => {
    try {
      const response = await fetch("http://localhost:5000/districts");
      const jsonData = await response.json();

      setDistricts(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getCities();
    getDisasterTypes();
    getDistricts();
  }, []);

  return (
    <Container>
      <h3 className="py-3"> Afet Bölgesi Kaydı Oluştur</h3>
      <Form noValidate validated={validated}>
        <Row className="my-3">
          <Form.Group as={Col} md="6" controlId="validationCustomRegionName">
            <Form.Label>Afet Bölgesi Adı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Afet bölgesi için bir ad oluşturunuz."
              required
              onChange={(e) => setRegion_name(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustomDisaster">
            <Form.Label>Afet Türünü Seçiniz</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={(e) => setDisaster_type_id(e.target.value)}
            >
              <option value="" disabled selected></option>

              {disasters.map((disaster_types) => (
                <option
                  key={disaster_types.disaster_type_id}
                  value={disaster_types.disaster_type_id}
                >
                  {disaster_types.disaster_type}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomCity">
            <Form.Label>Afet İlini Seçiniz</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCity_id(e.target.value)}
              required
            >
              <option value="" disabled selected></option>
              {cities.map((cities) => (
                <option key={cities.city_id} value={cities.city_id}>
                  {cities.city}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDistrict">
            <Form.Label>Afet İlçesini Seçiniz</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setDistrict_id(e.target.value)}
              required
            >
              <option value="" disabled selected></option>
              {districts.map((districts) => (
                <option
                  key={districts.district_id}
                  value={districts.district_id}
                >
                  {districts.district}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomDisasterDate">
            <Form.Label>Afet Tarihi</Form.Label>
            <Form.Control
              type="date"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setDisaster_date(e.target.value)}
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

export default SubmitRegion;
