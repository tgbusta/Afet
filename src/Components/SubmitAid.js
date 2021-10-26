import React, { validated, handleSubmit } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  FormGroup,
  Col,
  Row,
} from "react-bootstrap";

const SubmitAid = () => {
  return (
    <Container>
      <h3 className="py-3">Yardım Kaydı Oluştur</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="my-3">
          
          <Form.Group as={Col} md="4" controlId="validationCustomAidName">
            <FloatingLabel
              controlId="floatingInput"
              label="Afetzedenin Adı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Afetzedenin Adı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidSurname">
            <FloatingLabel
              controlId="floatingInput"
              label="Afetzedenin Soyadı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Afetzedenin Soyadı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomAidIdentityNumber"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="TC Kimlik Numarası"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="TC Kimlik Numarası" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col} md="4" controlId="validationCustomAidTel">
            <FloatingLabel
              controlId="floatingInput"
              label="Telefon Numarası"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Telefon Numarası" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustomAidAdress">
            <FloatingLabel
              controlId="floatingInput"
              label="Adres"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Adres" />
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
              label="Afet Bölgesi"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Afet Bölgesi" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidAmount">
            <FloatingLabel
              controlId="floatingInput"
              label="Yardım Tutarı"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Yardım Tutarı" />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAidDate">
            <FloatingLabel
              controlId="floatingInput"
              label="Yardım Tarihi"
              className="mb-3"
            >
              <Form.Control
                type="date"
                aria-describedby="inputGroupPrepend"
                required
              />
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

export default SubmitAid;
