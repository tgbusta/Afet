import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormGroup,
  Container,
  FloatingLabel
} from "react-bootstrap";

const SubmitUser = () => {
  const [validated, setValidated] = useState(false);
  const [user_name, setUser_name] = useState("");
  const [user_surname, setUser_surname] = useState("");
  const [user_mail, setUser_mail] = useState("");
  const [user_pass, setUser_pass] = useState("");
  const [user_username, setUser_username] = useState("");

  const handleSubmit = async e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }

    setValidated(true);

    if(validated){
        e.preventDefault();
        try{
            const body = {user_name, user_surname, user_mail, user_pass, user_username};
            const response =  await fetch("http://localhost:5000/users", {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        }catch (e) {
            console.error(e.message)
        }
    }

  };

  return (
    
    <Container>
        <h3 className="py-3">Kullanıcı Kaydı Oluştur</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

<Form.Group as={Col} md="4" controlId="validationCustomName">
            <FloatingLabel
              controlId="floatingInput"
              label="Personel Adı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Personel Adı" onChange={e => setUser_name(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomSurname">
            <FloatingLabel
              controlId="floatingInput"
              label="Personel Soyadı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Personel Soyadı" onChange={e => setUser_surname(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
            
        
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="E-Posta Adresi"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="E-Posta Adresi" onChange={e => setUser_mail(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
              Geçerli bir e-posta adresi giriniz.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

        </Row>
        <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <FloatingLabel
              controlId="floatingInput"
              label="Kullanıcı Adı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Kullanıcı Adı" onChange={e => setUser_username(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomPassword">
            <FloatingLabel
              controlId="floatingInput"
              label="Şifre"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="******" onChange={e => setUser_pass(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        
        </Row>
        <Row className="text-center pt-5">
          <FormGroup>
            <Button type="submit" className="bg-success">
              Kaydet
            </Button>
          </FormGroup>
        </Row>
      </Form>
    </Container>
  );
};

export default SubmitUser;
