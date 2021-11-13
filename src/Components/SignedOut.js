import React from "react";
import { Button, Nav } from "react-bootstrap";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Nav.Item className="p-3 mx-5">
      <Button variant="outline-dark" onClick={signIn} className="mx-2">
        Giriş Yap
      </Button>
      </Nav.Item>
    </div>
  );
}
