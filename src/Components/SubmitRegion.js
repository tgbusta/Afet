import React, { validated, handleSubmit } from "react";
import {
  Form,
  Button,
  Row,
  InputGroup,
  Col,
  FormGroup,
  Container,
  FloatingLabel,
} from "react-bootstrap";

const SubmitRegion = () => {
  return (
    <Container>
      <h3 className="py-3"> Afet Bölgesi Kaydı Oluştur</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="my-3">
          <Form.Group as={Col} md="6" controlId="validationCustomRegionName">
            <FloatingLabel
              controlId="floatingInput"
              label="Afet Bölgesi Adı"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Afet Bölgesi Adı"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>


          <Form.Group as={Col} md="6" controlId="validationCustomDisaster">
            <FloatingLabel
              controlId="floatingInput"
              label="Afet Türü"
              className="mb-3"
            >
              <Form.Control as="select">
              <option value="">Sel</option>
              <option value="">Deprem</option>
              <option value="">Yangın</option>
              <option value="">Toprak Kayması</option>
              <option value="">Çığ</option>
              <option value="">Fırtına</option>
              <option value="">Diğer</option>
            </Form.Control>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

        </Row>
        <Row className="mb-4">
        
        <Form.Group as={Col} md="4" controlId="validationCustomCity">
            <FloatingLabel
              controlId="floatingInput"
              label="Afet İli"
              className="mb-3"
            >
              <Form.Control as="select" required>
              <option value="">Rize</option>
              <option value="">Kastamonu</option>
              <option value="">Muğla</option>
              <option value="">Zonguldak</option>
              <option value="">Van</option>
              
            </Form.Control>
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
         
          <Form.Group as={Col} md="4" controlId="validationCustomDistrict">
            <FloatingLabel
              controlId="floatingInput"
              label="Afet İlçesi"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Afet İlçesi"
                required
              />
              <Form.Control.Feedback type="invalid">
                Bu alanın doldurulması zorunludur.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
         
          <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomDisasterDate"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Afet Tarihi"
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

export default SubmitRegion;
