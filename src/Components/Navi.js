import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/logo.jpg";
import { NavLink } from "react-router-dom";

const Navi = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">
            <div className="d-flex bd-highlight">
              <div className="p-2 bd-highlight">
                <Image src={logo} fluid style={{ width: "300px" }} />
                <br />
                <h3 className="">Afet Yardım Sistemi</h3>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav nav-menu-custom"
                  style={{ position: "absolute", top: "65px", right: "65px" }}
                />
              </div>
              <div className="p-2 flex-shrink-1 bd-highlight align-self-end">
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav className="flex-wrap justify-content-center" style={{ fontSize: ".85rem" }}>
                    <NavLink className="px-3"
                      to={"/home"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Anasayfa
                    </NavLink>
                    <NavLink className="px-3"
                      to={"/aids"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Yardımlar
                    </NavLink>
                    <NavLink className="px-3"
                      to={"/donations"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Bağışlar
                    </NavLink>
                    <NavLink className="px-3"
                      to={"/regions"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Bölgeler
                    </NavLink>
                    <NavLink className="px-3"
                      to={"/case"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Kasa
                    </NavLink>
                    <NavLink className="px-3"
                      to={"/users"}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Kullanıcı İşlemleri
                    </NavLink>
                    </Nav>
                    <Nav className="flex-wrap justify-content-end">
                    <LinkContainer to={"/signin"}>
                      <Nav.Link>
                        <Button variant="outline-dark">Giriş Yap</Button>
                      </Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Navi;
