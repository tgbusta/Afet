import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import notfound from "../img/notfound.jpg";

export class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row align="center"><Col></Col>
        <Col><h3 className="m-5 p-5"> Üzgünüz, böyle bir sayfa bulunamadı! </h3></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <Image src={notfound} fluid />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
