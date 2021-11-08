import React from "react";
import { Button } from "react-bootstrap";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button variant="outline-dark" onClick={signIn} className="mx-2">
        Giriş Yap
      </Button>
    </div>
  );
}
