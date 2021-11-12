import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  FormGroup,
  Container,
  
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const SubmitUser = () => {
  const [validated, setValidated] = useState(false);

  const [user_name, setUser_name] = useState("");
  const [user_surname, setUser_surname] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_pass, setUser_pass] = useState("");
  const [user_username, setUser_username] = useState("");

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } 
      try {
        const body = {
          user_name,
          user_surname,
          user_email,
          user_pass,
          user_username,
        };
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        console.log(response);
        toast.success("Kullanıcı kaydı başarılı şekilde oluşturuldu.");
        setTimeout(() => window.location.reload(), 5000);
      } catch (e) {
        console.error(e.message);
      }
    
  };

  return (
    <Container>
      <h3 className="py-3">Kullanıcı Kaydı Oluştur</h3>

      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomName">
            <Form.Label>Personel Adı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Personel adını giriniz."
              onChange={(e) => setUser_name(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <Form.Label>Personel Soyadı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Personel soyadını giriniz."
              onChange={(e) => setUser_surname(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>E-Posta Adresi</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="E-Posta adresini giriniz."
              onChange={(e) => setUser_email(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Geçerli bir e-posta adresi giriniz.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kullanıcı adı belirleyiniz."
              onChange={(e) => setUser_username(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Bu alanın doldurulması zorunludur.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomPassword">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              onChange={(e) => setUser_pass(e.target.value)}
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

export default SubmitUser;
