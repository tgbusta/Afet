import React from "react";
import { Button, Nav } from "react-bootstrap";
import {FaSignInAlt} from "react-icons/fa";

export default function SignedOut() {
  return (
    <div>
      <Nav.Item className="p-3 px-4 mx-4">
      <Button variant="outline-success"><Nav.Link href="/login">
      <FaSignInAlt/><span className="mx-2">Giriş Yap</span>
     </Nav.Link></Button>
     <Nav.Link className="mx-5 my-2 px-3" href="/register">
                  Kayıt Ol
                </Nav.Link>
      </Nav.Item>
    </div>
  );
}
