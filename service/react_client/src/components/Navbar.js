import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TbLetterE } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src="/logo_brand.png"
            className="img-fluid logo"
            alt="그린몽 브랜드 로고"
            style={{ maxHeight: "40px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> 서비스 소개
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/esg"
                onClick={() => updateExpanded(false)}
              >
                <TbLetterE style={{ marginBottom: "2px" }} /> 환경 경영 평가
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/faq"
                onClick={() => updateExpanded(false)}
              >
                <FaQuestion style={{ marginBottom: "2px" }} /> FAQ
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
