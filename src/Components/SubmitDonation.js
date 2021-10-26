import React, { validated, handleSubmit } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormGroup,
  Tabs,
  Tab,
  FloatingLabel,
  Container,
} from "react-bootstrap";

const SubmitDonation = () => {
  return (
    <Container>
      <h3 className="py-3">Bağış Kaydı Oluştur</h3>
      <Tabs defaultActiveKey="real" id="aid-tabs" className="my-3">
        <Tab eventKey="real" title="Gerçek Kişi">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustomDonorName">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bağışçının Adı"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Bağışçının Adı" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomDonorSurname"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bağışçının Soyadı"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Bağışçının Soyadı" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomDonorIdNumber"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="TC Kimlik Numarası"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="TC Kimlik Numarası" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustomDonorTel">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Telefon Numarası"
                  className="mb-3"
                >
                  <Form.Control type="tel" placeholder="Telefon Numarası" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustomDonorAdress"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Adres"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Adres" required/>
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
                  <Form.Control type="text" placeholder="Bağış Bölgesi" required/>
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
                  label="Bağış Tutarı"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Bağış Tutarı" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomDonationDate"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bağış Tarihi"
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
        </Tab>

        <Tab eventKey="legal" title="Tüzel Kişi">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomDonorTitle"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bağışçının Unvanı"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Bağışçının Unvanı" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustomTaxNumber">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Vergi Numarası"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Vergi Numarası" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="4" controlId="validationCustomDonorTel">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Telefon Numarası"
                  className="mb-3"
                >
                  <Form.Control type="tel" placeholder="Telefon Numarası" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustomDonorAdress"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Adres"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Adres" required/>
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
                  <Form.Control type="text" placeholder="Bağış Bölgesi" required/>
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
                  label="Bağış Tutarı"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Bağış Tutarı" required/>
                  <Form.Control.Feedback type="invalid">
                    Bu alanın doldurulması zorunludur.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomDonationDate"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Bağış Tarihi"
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
        </Tab>
      </Tabs>
    </Container>
  );
};

export default SubmitDonation;
