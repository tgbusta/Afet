import React, { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/logo.jpg";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navi = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  function handleSignOut() {
    setIsAuthenticated(false);
  }

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <div className="d-flex bd-highlight">
            <Navbar.Brand href="/">
              <div className="p-2 bd-highlight">
                <Image src={logo} fluid style={{ width: "300px" }} />
                <br />
                <h3 className="">Afet Yardım Sistemi</h3>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav nav-menu-custom"
                  style={{ position: "absolute", top: "65px", right: "65px" }}
                />
              </div>
            </Navbar.Brand>

            <div className="p-2 flex-shrink-1 bd-highlight align-self-end">
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >

                <Nav className="flex-wrap justify-content-end">
                  {isAuthenticated ? (
                    <SignedIn signOut={handleSignOut} />
                  ) : (
                    <SignedOut signIn={handleSignIn} />
                  )}
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Navi;
