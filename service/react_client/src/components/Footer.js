import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillGitlab, AiFillInstagram } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed by Soumyajit Behera</h3> */}
          <h3>해당 사이트는 서울시립대와 무관합니다.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} 파아란</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/PJW011122"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://gitlab.com/PJW011122"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGitlab />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/a_mollang_u"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
