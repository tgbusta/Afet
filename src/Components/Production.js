import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Production() {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ }}>
          <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src="../img/" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
           
            <Card.Body>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Production;
