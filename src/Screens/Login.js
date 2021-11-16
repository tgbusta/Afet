import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Login() {

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const girisYap = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/sendemail");
      const jsonData = await response.json();
  
    } catch (e) {
      console.error(e.message);
    }

  };

  return (

    <div>
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

        <Button variant="outline-success" type="submit">
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
}

export default Login;
