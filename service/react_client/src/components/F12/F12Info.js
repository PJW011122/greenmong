import React from "react";
import { Card } from "react-bootstrap";

function F12Card() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">F12</span>와 관련된 개선사항 혹은
            문의사항은
            <span className="purple">paaran2024@gmail.com</span>으로 문의
            부탁드립니다.
            <br />
            (1인 개발이라 버그 픽스는 쪼오금 늦을 수도?)
            <br />
            <br />
            혹시나 <span className="purple">앱 출시</span>와 관련해 미리 말씀
            드리자면 <span className="purple">안드로이드는 가능</span>한데{" "}
            <span className="purple">ios는 어려울 것</span> 같습니다. ios가
            안되는 수많은 이유가 있겠습니다만 가장 큰 이유는 앱을 등록하는데
            너무 비쌉니다ㅠㅠ
            {/* <br />
            <br />
            다음 업데이트는 숨겨져 있는 성적의 과목 추론을 하고 싶습니다... 만
            분석을 위해 일부 정보(수강 과목)를 수집해야 해서 고민만 하고
            있습니다.
            <br />
            만약 하게 된다면 DB도 연결해야하고, 개인정보 수집 동의도 받아야 하고
            암튼 그 과정이 매우매우매우 귀찮을게 뻔히 보여서 마음 속에 묻어두지
            않을까 싶습니다 하핳 */}
            <br />
            <br />
            옆집에 <span className="purple">파아란 족보</span>라는 이름으로
            서비스 런칭을 준비 중입니다. 공공재 드립치는 놈들, 무료 나눔이라
            해서 쪽지 보내면 커피값 받는다는 놈들 꼴보기 싫어서 만들고 있습니다.
            <br />
            날먹하는 학우없는 자생 가능한 환경을 만들기 위해 많은 노력을
            기울이고 있는 중이고, 늦어도{" "}
            <span className="purple">2025년 2학기 시작 전</span>에 배포할 수
            있도록 최선을 다하겠습니다. 많은 관심 부탁드립니다.
            <br />
            <br />
            마지막으로, 개발이나 UI/UX에 참여하고 싶다면 위에 적힌 메일로 신청
            부탁드립니다~!!
            <br />
            프론트랑 디자인이 진짜 개어렵네요 ㅎ ㅏ
          </p>
          <footer className="blockquote-footer">파아란</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default F12Card;
