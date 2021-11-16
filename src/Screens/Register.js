import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function Register() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [validated, setValidated] = useState(false);


    const kayitOl = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (!checkPasswordMatch()) {
            event.preventDefault();
            event.stopPropagation();
            setRePassword("");
            toast.error("Girmiş olduğunuz şifreler uyuşmamaktadır.");

            return;
        }

        setValidated(true);
        try {
            let user = {
                name: name,
                lastName: lastName,
                email: email,
                password: password
            }

           

            // const resp = await fetch()

        } catch (e) {
            console.error(e.message);
        }



    };

    const checkPasswordMatch = () => {
        if (password !== rePassword)
            return false;
        return true;

    }

    return (

        <div>
            <h3 className="p-5 text-align-center">Kayıt Formu </h3>
            <Form noValidate validated={validated} onSubmit={kayitOl}>
                <Form.Group className="mb-3" controlId="loginUsername">
                    <Form.Label>İsim</Form.Label>
                    <Form.Control type="text" placeholder="İsim giriniz." onChange={(e) => { setName(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginUsername">
                    <Form.Label>Soyisim</Form.Label>
                    <Form.Control type="text" placeholder="Soyisim giriniz." onChange={(e) => { setLastName(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginUsername">
                    <Form.Label>E posta</Form.Label>
                    <Form.Control type="email" placeholder="E posta giriniz." onChange={(e) => { setEmail(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control type="password" placeholder="Şifre giriniz." onChange={(e) => { setPassword(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Şifre Tekrar</Form.Label>
                    <Form.Control type="password" placeholder="Tekrar şifre giriniz." onChange={(e) => { setRePassword(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="outline-success" type="submit" >
                    Kayıt Ol
                </Button>
            </Form>
            <ToastContainer newestOnTop closeOnClick />
        </div>
    );
}

export default Register;
