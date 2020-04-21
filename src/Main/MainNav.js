import React from "react";

import CareersList from "../components/careers/CareersList";
import ProgramsList from "../components/careers/ProgramsList";
import Mood from "../Dashboard/Mood";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";

export default function MainNav() {
  return (
    <div>
      <Navbar type="dark" theme="info" expand="md">
        <NavbarBrand href="#">PathFinder</NavbarBrand>

        <Nav type="dark" navbar className="ml-auto" expand="md">
          <NavItem>
            <NavLink>Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Help</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="background">
      </div>
      {/* <CareersList />
      <ProgramsList />
      <Mood /> */}
    </div>
  );
}
