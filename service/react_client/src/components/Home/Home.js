// 첫화면 첫번째 페이지

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMailOutline } from "react-icons/io5";
import contact from "../../Assets/home-contact.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> 그린몽 </span> 소개
              </h1>
              <p className="home-about-body">
                <b className="purple">그린몽</b>은 누구나 무료로 이용 가능한{" "}
                <b className="purple">환경 경영 평가 웹 플랫폼</b>입니다. <br />
                <br />
                ESG 경영은 이제 선택이 아닌 필수입니다.
                <br />
                하지만, 규모가 크지 않은 기업들은 관련 전문 인력을 배치하기 쉽지
                않습니다.
                <br />
                <br />
                무한한 발전 가능성을 가진 우리 기업들이 2050 탄소중립에
                <br />
                발맞추어 환경 경영 전략을 수립할 수 있는 발판이 되겠습니다.
                <br />
                몇가지 항목에 답하여 환경 평가 보고서를 받아보세요.
                <br />
                <br />
                <b className="purple">그린몽</b>은 기업과 함께
                성장해나가겠습니다.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <img
                src="/assets/Home/home_1.png"
                className="img-fluid"
                alt="avatar"
              />
              {/* <img src={contact} className="img-fluid" alt="contact" /> */}
              <h1 style={{ fontSize: "1.4em", marginTop: "5px" }}>
                <span className="purple"> [ Contact ] </span>
              </h1>
              <p style={{ textAlign: "center" }}>
                <IoMailOutline style={{ marginBottom: "2px" }} />
                {"  "}
                tneod456@uos.ac.kr
                <br />
                <IoMailOutline style={{ marginBottom: "2px" }} />
                {"  "}
                zeen155@uos.ac.kr
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
