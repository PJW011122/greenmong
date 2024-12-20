import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import SolutionLogin from "./SolutionLogin";
import SolutionCard from "./SolutionCard";

function Solution() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false); // 이메일 인증 버튼 클릭 여부
  const [verificationCode, setVerificationCode] = useState(""); // 인증 코드 상태
  const [isVerified, setIsVerified] = useState(false); // 인증 성공 여부

  // 레거시 파일: 241119 박준우
  // 플랑크톤 준비할 때 혹시 쓸 일 있나 싶어서 해봤음
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await generateText(inputValue);
  //   setOutputValue(result);
  //   setInputValue("");
  // };
  // async function generateText(input) {
  //   try {
  //     const response = await axios.post(
  //       "https://api.openai.com/v1/chat/completions", // 엔드포인트 수정
  //       {
  //         model: "gpt-4o-mini", // 모델 변경
  //         messages: [{ role: "user", content: input }], // 요청 형식 변경
  //         temperature: 0.7,
  //         max_tokens: 512,
  //         top_p: 1,
  //         frequency_penalty: 0,
  //         presence_penalty: 0,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     return response.data.choices[0].message.content; // 응답 데이터 접근 방식 변경
  //   } catch (error) {
  //     console.error(
  //       "OpenAI API 요청 오류:",
  //       error.response ? error.response.data : error.message
  //     );
  //     alert(
  //       `OpenAI API 요청 중 오류가 발생했습니다: ${
  //         error.response ? error.response.data.error.message : error.message
  //       }`
  //     );
  //     return "";
  //   }
  // }

  return (
    <Container fluid className="about-section">
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
                {/* 레거시: 플랑크톤 준비할 때 chatGPT 쓸까봐 해봄 */}
                {/* <div className="chat-container">
                  <form onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <button type="submit">Send</button>
                  </form>
                  <div className="chat-output">{outputValue}</div>
                </div> */}
                <Row
                  style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                  <Col
                    md={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Form.Check
                      type="switch"
                      id="toggle-signup"
                      checked={isSignup}
                      onChange={() => setIsSignup(!isSignup)}
                    />
                    <Form.Label>{isSignup ? "회원가입" : "로그인"}</Form.Label>
                  </Col>
                  <Col>
                    <h1
                      style={{
                        fontSize: "2.1em",
                      }}
                    >
                      <strong className="purple">파아란 족보 </strong>
                      {isSignup ? "회원가입" : "로그인"}
                    </h1>
                  </Col>
                  <Col md={2} />
                </Row>

                <SolutionLogin
                  setIsLoggedIn={setIsLoggedIn}
                  isSignup={isSignup}
                />
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
              <strong className="purple">파아란 족보</strong> 정보 수집 범위
            </h1>
            <SolutionCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Solution;
