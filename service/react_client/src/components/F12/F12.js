import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import F12Login from "./F12Login";
import F12Card from "./F12Card";
import F12Result from "./F12Result";
import F12Info from "./F12Info";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

function F12() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isF12InfoOpen, setIsF12InfoOpen] = useState(false);

  return (
    <Container fluid className="about-section">
      {isLoggedIn ? (
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Card
                style={{
                  padding: "20px",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: "8px",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      fontSize: "2.1em",
                      paddingBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    <strong className="purple">F12</strong> 결과
                  </h1>
                </Card.Body>
                <F12Result />
              </Card>
            </Col>
            <Col
              md={5}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                  userSelect: "none",
                }}
                onClick={() => setIsF12InfoOpen(!isF12InfoOpen)}
              >
                {isF12InfoOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
                <strong className="purple"> F12</strong> 개발자의 이야기
              </h1>
              {isF12InfoOpen ? <F12Info /> : null}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Card
                style={{
                  padding: "20px",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: "8px",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      fontSize: "2.1em",
                      paddingBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    <strong className="purple">PORTAL</strong> 로그인
                  </h1>
                  <F12Login setIsLoggedIn={setIsLoggedIn} />
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={5}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">F12</strong> 정보 수집 범위
              </h1>
              <F12Card />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default F12;
