import React from "react";
import { Card } from "react-bootstrap";

function F12Card() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">F12 </span>는 사용자의 어떠한 정보도
            저장하지 않습니다.
            <br />
            <br />
            보안을 위해 입력되는 모든 정보는{" "}
            <span className="purple">암호화</span>되어 학교 포털과 통신합니다.
            <br />
            <br />* WISE에 로그인 중이라면 강제로 로그아웃 될 수 있습니다.
          </p>
          <footer className="blockquote-footer">파아란</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default F12Card;
