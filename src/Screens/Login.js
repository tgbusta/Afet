import React, { useState } from "react";
import { Container,Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import TokenService from "../Services/TokenService";

function Login() {
  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const girisYap = async (event) => {
    event.preventDefault();
    let user = {
      username: usernameLogin,
      password: passwordLogin
  }
    const resp = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const jsonData = await resp.json();
    jsonData.status ? toast.success(jsonData.message) : toast.error(jsonData.message);
    if(jsonData.token) 
    {
      TokenService.setToken(jsonData.token);
      window.location = "/home";
    }

  };

  return (

    <div>
      <Container>
      <h3 className="p-5 text-align-center"> Giriş Yap </h3>
      <Form onSubmit={girisYap}>
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control type="text" placeholder="Kullanıcı adını giriniz." onChange={(e) => { setUsernameLogin(e.target.value) }} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Şifre giriniz." onChange={(e) => { setPasswordLogin(e.target.value) }} />
        </Form.Group>

        <Row className="text-center pt-5">
          <Col> <Button variant="outline-success" type="submit">
          Giriş Yap
        </Button></Col>
        
        </Row>

      </Form>
      <ToastContainer newestOnTop closeOnClick />
      </Container>
    </div>
  );
}

export default Login;
