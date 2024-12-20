// 241105
// 첫화면 두번째 페이지

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Irumae/irumae_58.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> 파아란 시대 </span> 소개
            </h1>
            <p className="home-about-body">
              해당 플랫폼은 <b className="purple">F12</b>를 통한 성적 미리보기
              및 <b className="purple">시간표 생성</b> 서비스를 제공합니다.
              {/* <b className="purple">족보</b> 공유 서비스를 제공합니다. */}
              <br />
              <br />
              보안을 위해 각각의 서비스는 철저히 별도로 운영됩니다.
              <br />
              (편의를 위해 하나의 사이트에 연결했을 뿐 별도의 플랫폼입니다.)
              <br />
              <br />
              정보 수집은 최소한으로 구성하였고,
              <br />각 서비스 첫 화면에 어떤 정보를 수집하는지 적어두었습니다.
              <br />
              <br /> 추가로 궁금하신 사항이 있다면{" "}
              <b className="purple">junwoo5914@uos.ac.kr</b>로 연락
              부탁드립니다.
              <br />
              <br />* 네이버에서 제공하는{" "}
              <b className="purple">나눔 고딕 글꼴</b>이 적용되었습니다.
              <br /> * 해당 서비스는 <b className="purple">서울시립대</b>와{" "}
              관련이 없습니다.
              {/* <br /> * <b className="purple">Soumyajit Behera</b>의{" "}
              <b className="purple">Portfolio</b> 디자인을 사용하였습니다. */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
