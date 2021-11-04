import React from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Nav
        className="flex-wrap justify-content-end"
        style={{ fontSize: ".85rem" }}
      >
        <NavLink
          className="px-3"
          to={"/home"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Anasayfa
        </NavLink>
        <NavLink
          className="px-3"
          to={"/aids"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Yardımlar
        </NavLink>
        <NavLink
          className="px-3"
          to={"/donations"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Bağışlar
        </NavLink>
        <NavLink
          className="px-3"
          to={"/regions"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Bölgeler
        </NavLink>
        <NavLink
          className="px-3"
          to={"/case"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Kasa
        </NavLink>
        <NavLink
          className="px-3"
          to={"/users"}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Kullanıcı İşlemleri
        </NavLink>
      </Nav>
      <Button variant="outline-dark" onClick={signOut}>
        Çıkış Yap
      </Button>
    </div>
  );
}
