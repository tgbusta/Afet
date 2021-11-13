import React from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <NavLink
        className="p-3 m-5"
        to={"/home"}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Ana Sayfa
      </NavLink>
      <br />
      <br />
      <NavLink
        className="p-3 m-5"
        to={"/aids"}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Yardım İşlemleri
      </NavLink>
      <br />
      <br />
      <NavLink
        className="p-3 m-5"
        to={"/donations"}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Bağış İşlemleri
      </NavLink>
      <br />
      <br />
      <NavLink
        className="p-3 m-5"
        to={"/regions"}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Bölge İşlemleri
      </NavLink>
      <br />
      <br />
      <NavLink
        className="p-3 m-5"
        to={"/users"}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Kullanıcı İşlemleri
      </NavLink>
      <br />
      <br />

      <Nav.Item className="p-3 mx-5">
        <Button variant="outline-dark" onClick={signOut}>
          Çıkış Yap
        </Button>
      </Nav.Item>
    </div>
  );
}
