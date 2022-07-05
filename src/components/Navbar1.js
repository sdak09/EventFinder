import React from "react";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";

function Navbar1({ query, setQuery }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome To Event Finder</Navbar.Brand>
        </Container>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navbar1;
