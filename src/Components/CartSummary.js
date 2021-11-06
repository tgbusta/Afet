import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FaBox } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
          <FaBox className="mx-3" size="2em" /> Bağış Kutusu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Bağış Kutusu Detayı
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
