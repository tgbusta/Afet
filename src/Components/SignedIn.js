import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SignedIn({ signOut }) {
  return (
    <div>
     
        <Row style={{ fontSize: ".85rem" }}>
          <Col className="md-2">
            <NavLink
              className="px-3"
              to={"/home"}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Anasayfa
            </NavLink>
          </Col>
          <Col className="md-2">
            <NavLink
              className="px-3"
              to={"/aids"}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Yardımlar
            </NavLink>
          </Col>
          <Col className="md-2">
            <NavLink
              className="px-3"
              to={"/donations"}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Bağışlar
            </NavLink>
          </Col>
          <Col className="md-2">
            <NavLink
              className="px-3"
              to={"/regions"}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Bölgeler
            </NavLink>
          </Col>
          <Col className="md-2">
            <NavLink
              className="px-3"
              to={"/users"}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Kullanıcı İşlemleri
            </NavLink>
          </Col>
          <Col className="md-2">
            <Button variant="outline-dark" onClick={signOut}>
              Çıkış Yap
            </Button>
          </Col>
        </Row>
      
    </div>
  );
}
