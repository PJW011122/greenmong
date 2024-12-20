import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AboutLogin({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        const uos_login = await axios.post(
          `${process.env.REACT_APP_FASTAPI}/login`,
          // `/login`,
          { username, password }
        );

        if (uos_login.data.status === true) {
          alert("로그인 성공!");
          console.log("로그인 응답 데이터:", uos_login.data);
          setIsLoggedIn(true); // 로그인 상태 업데이트
        } else {
          alert(uos_login.data.message);
        }
      } catch (error) {
        // 백엔드에서 반환된 오류 메시지를 alert로 표시합니다.
        if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          alert(`오류: ${error.response.data.detail}`);
        } else {
          alert("오류: 로그인 중 문제가 발생했습니다.");
        }
      }
    } else {
      alert("아이디와 비밀번호를 입력하세요.");
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

      <Button
        variant="primary"
        type="submit"
        style={{ marginTop: "15px", width: "100%" }}
      >
        로그인
      </Button>
    </Form>
  );
}

export default AboutLogin;
