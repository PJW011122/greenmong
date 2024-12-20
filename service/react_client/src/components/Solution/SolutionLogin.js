import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

function SolutionLogin({ setIsLoggedIn, isSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false); // 이메일 인증 버튼 클릭 여부
  const [verificationCode, setVerificationCode] = useState(""); // 인증 코드 상태
  const [isVerified, setIsVerified] = useState(false); // 인증 성공 여부

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password && (isSignup ? email : true)) {
      // 회원가입 시 이메일도 필수
      try {
        const endpoint = isSignup ? "/signup" : "/signin";
        const payload = { username, password };
        if (isSignup) payload.email = email;

        const response = await axios.post(
          // `${process.env.REACT_APP_FASTAPI}${endpoint}`,
          `${endpoint}`,
          payload
        );

        if (response.data.status === true) {
          alert(isSignup ? "회원가입 성공!" : "로그인 성공!");
          console.log(
            `${isSignup ? "회원가입" : "로그인"} 응답 데이터:`,
            response.data
          );
          setIsLoggedIn(true); // 로그인 또는 회원가입 성공 시 상태 업데이트
        } else {
          alert(
            isSignup
              ? "회원가입 실패: 이미 존재하는 아이디입니다."
              : "로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다."
          );
        }
      } catch (error) {
        console.error("로그인 또는 회원가입 중 오류 발생:", error);
        alert(
          "오류 발생",
          isSignup
            ? "회원가입 중 문제가 발생했습니다."
            : "로그인 중 문제가 발생했습니다."
        );
      }
    } else {
      alert("모든 필드를 입력하세요.");
    }
  };

  // 이메일 인증 요청
  const handleEmailVerification = async () => {
    if (email) {
      try {
        const uosEmail = `${email}@uos.ac.kr`;
        const response = await axios.post(
          // `${process.env.REACT_APP_FASTAPI}/verifyemail/send`,
          `/verifyemail/send`,
          { email: uosEmail }
        );
        if (response.data.status) {
          alert("인증 코드가 이메일로 전송되었습니다.");
          setIsEmailSent(true);
        }
      } catch (error) {
        console.error("이메일 인증 오류:", error);
        alert("이메일 전송 중 오류가 발생했습니다.");
      }
    } else {
      alert("이메일을 입력하세요.");
    }
  };

  // 인증 코드 확인
  const handleVerifyCode = async () => {
    if (verificationCode) {
      try {
        const uosEmail = `${email}@uos.ac.kr`;
        const response = await axios.post(
          // `${process.env.REACT_APP_FASTAPI}/verifyemail/check`,
          `/verifyemail/check`,
          { email: uosEmail, code: verificationCode }
        );
        if (response.data.status) {
          alert("이메일 인증 성공!");
          setIsVerified(true);
        } else {
          alert("인증 코드가 올바르지 않습니다.");
        }
      } catch (error) {
        console.error("인증 코드 확인 오류:", error);
        alert("인증 코드 확인 중 오류가 발생했습니다.");
      }
    } else {
      alert("인증 코드를 입력하세요.");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formUsername">
        <Form.Control
          type="text"
          placeholder="아이디를 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword" style={{ marginTop: "15px" }}>
        <Form.Control
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      {/* 이메일 입력 및 인증 버튼 */}
      {isSignup && (
        <>
          <Form.Group
            controlId="formEmail"
            style={{
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Control
              type="text"
              placeholder="이메일 아이디를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginRight: "5px" }}
            />
            <span>@uos.ac.kr</span>
            <Button
              variant="secondary"
              onClick={handleEmailVerification}
              style={{ marginLeft: "10px", minWidth: "60px" }}
            >
              인증
            </Button>
          </Form.Group>

          {/* 인증 코드 입력 및 확인 버튼 */}
          {isEmailSent && (
            <Form.Group
              controlId="formVerificationCode"
              style={{ marginTop: "15px" }}
            >
              <Form.Control
                type="text"
                placeholder="인증 코드를 입력하세요"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Button
                variant="secondary"
                onClick={handleVerifyCode}
                style={{ marginTop: "10px", width: "100%" }}
              >
                확인
              </Button>
            </Form.Group>
          )}
        </>
      )}

      <Button
        variant="primary"
        type="submit"
        style={{ marginTop: "15px", width: "100%" }}
        disabled={isSignup && !isVerified} // 인증이 완료되어야만 활성화
      >
        {isSignup ? "회원가입" : "로그인"}
      </Button>
    </Form>
  );
}

export default SolutionLogin;
