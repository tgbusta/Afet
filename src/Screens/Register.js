import React, { useState,useRef } from "react";
import { Container,Form,FormGroup,Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function Register() {
    const formRef = useRef(null);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [validated, setValidated] = useState(false);

    const formReset = ()=>{
        setName("");
        setEmail("");
        setLastName("");
        setPassword("");
        setRePassword("");
    }

    const handleSubmit = (e) => {
        const form =  e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
           
          } else{

            if (!checkPasswordMatch()) {
                setRePassword("");
               toast.error("Girmiş olduğunuz şifreler uyuşmamaktadır.");
               
                return;
           }
           deneme(e);
        }
        setValidated(true);
       

    };

    const deneme =async(e)=>{
        e.preventDefault();

        
       
    try {
        let user = {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        }

        const resp = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
          const jsonData = await resp.json();
          formReset();
          formRef.current.reset();
          setValidated(false);
          jsonData.status ? toast.success(jsonData.message) : toast.error(jsonData.message);

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

        <Container>
            <h3 className="p-5 text-align-center">Kayıt Formu </h3>
            <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="registerName">
                    <Form.Label>İsim</Form.Label>
                    <Form.Control type="text" placeholder="İsim giriniz." onChange={(e) => { setName(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerLastname">
                    <Form.Label>Soyisim</Form.Label>
                    <Form.Control type="text" placeholder="Soyisim giriniz." onChange={(e) => { setLastName(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>E posta</Form.Label>
                    <Form.Control type="email" placeholder="E posta giriniz." onChange={(e) => { setEmail(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control type="password" placeholder="Şifre giriniz." onChange={(e) => { setPassword(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerRepassword">
                    <Form.Label>Şifre Tekrar</Form.Label>
                    <Form.Control type="password" placeholder="Tekrar şifre giriniz." onChange={(e) => { setRePassword(e.target.value) }} required />
                    <Form.Control.Feedback type="invalid">
                        Bu alanın doldurulması zorunludur.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Row className="text-center pt-5">
                    <FormGroup>
                        <Button type="submit"
                            variant="outline-success"
                            
                        >
                            Kayıt Ol
                        </Button>
                    </FormGroup>
                </Row>
            </Form>
            <ToastContainer newestOnTop closeOnClick />
     </Container>

    );
}

export default Register;
