import React from "react";
import { Button, Nav } from "react-bootstrap";

export default function SignedOut() {
  return (
    <div>
      <Nav.Item className="p-3 mx-5">
      <Nav.Link href="/login">
        Giriş Yap
     </Nav.Link>
      </Nav.Item>
    </div>
  );
}
