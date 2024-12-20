import React from "react";
import Card from "react-bootstrap/Card";

function SolutionCard(props) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">파아란 족보</span>는 사용자의 아이디,
            패스워드, 이메일, 사이트 내 활동 내역(업로드, 다운로드, 댓글 등)을
            수집합니다.
            <br />
            <br /> 보안을 위해 패스워드, 이메일은{" "}
            <span className="purple">단방향 암호화</span>되어 저장됩니다.
            <br /> 익명성 보장 및 커뮤니티의 폐쇄성을 위해 이메일은 초기 인증 후
            계정과 <span className="purple">별도로 저장</span>됩니다.
            <br />
            <br /> * 아이디와 이메일은 연동되지 않으므로 계정 분실시{" "}
            <span className="purple">복구할 수 없습니다.</span>
            <br /> * 한 번 사용한 이메일은{" "}
            <span className="purple">재사용이 불가능</span>합니다.
          </p>
          <footer className="blockquote-footer">파아란</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SolutionCard;
