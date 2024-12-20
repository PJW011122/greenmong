import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import F12Result from "./F12Result";
import F12Info from "./F12Info";
import ESGcombo from "./ESGcombo.json";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

function ESG() {
  const [isSelected, setIsSelected] = useState(false);
  const [isF12InfoOpen, setIsF12InfoOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isSecondComboVisible, setIsSecondComboVisible] = useState(false);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedOption(""); // Reset second combo box
    if (selectedCategory) {
      const options = ESGcombo.filter((item) => item.type === selectedCategory);
      setFilteredOptions(options);
      setIsSecondComboVisible(true);
    } else {
      setFilteredOptions([]);
      setIsSecondComboVisible(false);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = () => {
    const selectedPk = filteredOptions.find(
      (option) => option.detailType === selectedOption
    )?.pk;
    if (selectedPk) {
      localStorage.setItem("ESGtype", selectedPk);
      console.log(`선택된 PK(${selectedPk})가 저장되었습니다.`);
    } else {
      console.log("선택된 옵션이 없습니다.");
    }
    setIsSelected(true);
  };

  // 공통 카드 스타일
  const cardStyle = {
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "8px",
  };

  return (
    <Container fluid className="about-section">
      {isSelected ? (
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
              <Card style={cardStyle}>
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
                  <F12Result />
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                  userSelect: "none",
                  cursor: "pointer",
                }}
                onClick={() => setIsF12InfoOpen(!isF12InfoOpen)}
              >
                {isF12InfoOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
                <strong className="purple"> F12</strong> 개발자의 이야기
              </h1>
              {isF12InfoOpen && <F12Info />}
            </Col>
          </Row>
        </Container>
      ) : (
        // 로그인 전 화면
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
              <Card style={cardStyle}>
                <Card.Body>
                  <h1
                    style={{
                      fontSize: "2.1em",
                      paddingBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    <strong className="purple">카테고리</strong> 선택
                  </h1>
                  <Form>
                    <Form.Group controlId="categorySelect">
                      <Form.Label>콤보박스 1: 카테고리</Form.Label>
                      <Form.Control
                        as="select"
                        value={category}
                        onChange={handleCategoryChange}
                      >
                        <option value="">-- 선택하세요 --</option>
                        {[...new Set(ESGcombo.map((item) => item.type))].map(
                          (type, index) => (
                            <option key={type + index} value={type}>
                              {type}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Form.Group>
                    {isSecondComboVisible && (
                      <Form.Group
                        controlId="optionsSelect"
                        style={{ marginTop: "20px" }}
                      >
                        <Form.Label>콤보박스 2: 상세 옵션</Form.Label>
                        <Form.Control
                          as="select"
                          value={selectedOption}
                          onChange={handleOptionChange}
                          disabled={!filteredOptions.length}
                        >
                          <option value="">-- 선택하세요 --</option>
                          {filteredOptions.map((option, index) => (
                            <option
                              key={option.detailType + index}
                              value={option.detailType}
                            >
                              {option.content}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    )}
                    {category && selectedOption && (
                      <Button
                        variant="primary"
                        style={{ marginTop: "20px" }}
                        onClick={handleButtonClick}
                      >
                        확인
                      </Button>
                    )}
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default ESG;
