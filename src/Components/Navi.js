import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaHandHoldingHeart } from "react-icons/fa";
import logo from "../img/logo.jpg";

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
                  <Nav className="flex-wrap w-100 justify-content-end">
                    <Nav.Link href="/home">Anasayfa</Nav.Link>
                    <Nav.Link href="/aids">Yardımlar</Nav.Link>
                    <Nav.Link href="/donations">Bağışlar</Nav.Link>
                    <Nav.Link href="/regions">Bölgeler</Nav.Link>
                    <Nav.Link href="/case">Kasa</Nav.Link>
                    <Nav.Link href="/users">Kullanıcı İşlemleri</Nav.Link>
                    <LinkContainer to="/signin">
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
