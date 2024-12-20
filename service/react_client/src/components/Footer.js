import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center", // 수평 가운데 정렬
        alignItems: "center", // 수직 가운데 정렬
        textAlign: "center", // 텍스트 정렬
      }}
    >
      <Row>
        <Col md="auto" className="footer-copywright">
          <h3>
            그린몽은 서울시립대학교 환경공학부 환경종합설계 프로젝트로
            제작되었습니다.
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
