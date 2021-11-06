import React from "react";
import { Button } from "react-bootstrap";
import CartSummary from "./CartSummary";
import { FaBox } from "react-icons/fa";


export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button variant="outline-dark" onClick={signIn} className="mx-2">
        Giriş Yap
      </Button>
      <CartSummary> <FaBox/></CartSummary>
    </div>
  );
}
