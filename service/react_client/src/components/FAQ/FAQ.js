import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqList from "./FAQlist.json";

function FAQ() {
  // FAQ 상태 관리
  const [faqs, setFaqs] = useState(faqList);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md="auto" className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> FAQ </span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="faq-section" style={{ textAlign: "left" }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
                  <h2
                    style={{
                      fontSize: "1.5em",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.isOpen ? "▼" : "▶"} {faq.question}
                  </h2>
                  {faq.isOpen && (
                    <div style={{ marginLeft: "20px" }}>
                      <img
                        src={faq.answer}
                        alt={faq.question}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default FAQ;
