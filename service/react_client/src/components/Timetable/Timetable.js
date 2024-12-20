import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import TimetableSearch from "./TimetableSearch";
import TimetableResult from "./TimetableResult";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

function Timetable() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
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
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
              <strong className="purple"> 조건</strong> 설정
            </h1>
            {isSearchOpen ? <TimetableSearch /> : null}
          </Col>

          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">파아란</strong> 시간표
            </h1>
            <TimetableResult />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Timetable;
