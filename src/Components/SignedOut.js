import React from "react";
import { Button, Nav } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

export default function SignedOut() {
  return (
    <div>
      <Nav.Item className="p-3 px-4 mx-4">
        <Button className="w-100" variant="outline-success">
          <Nav.Link href="/login">
            <FaSignInAlt />
            <span className="mx-2">Giriş Yap</span>
          </Nav.Link>
        </Button>
        <Button className="w-100 mt-2" variant="outline-info">
        <Nav.Link href="/register">
          Kayıt Ol
        </Nav.Link>
        </Button>
      </Nav.Item>
    </div>
  );
}
