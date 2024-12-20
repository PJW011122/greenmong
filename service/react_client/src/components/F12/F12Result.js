import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import fakeSubjects from "./FakeSubjects.json";

function F12Result() {
  const [isReal, setIsReal] = useState(true); // 과목 공개 여부 (공개가 true)
  //이거 샘플 코드임
  const results = [
    {
      subject: "전전설 2",
      credit: "2.0",
      grade: "A",
    },
    {
      subject: "전기회로 2",
      credit: "3.0",
      grade: "B+",
    },
  ];

  // 랜덤 값을 선택하는 함수
  const getRandomFakeSubject = () => {
    const randomIndex = Math.floor(Math.random() * fakeSubjects.length); //fakeSubject 과목수 만큼의 난수 생성
    return fakeSubjects[randomIndex];
  };

  return (
    <div
      style={{
        backgroundColor: "#121212", // 어두운 배경과 조화를 이루는 색상
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", // 부드러운 그림자 추가
      }}
    >
      {/* 이미 공개된 성적 */}
      <h5 style={{ color: "#FFFFFF", marginBottom: "5px", fontWeight: "bold" }}>
        이미 공개된 성적
      </h5>
      <Card
        style={{
          backgroundColor: "#1F1F1F",
          padding: "15px",
          color: "#E0E0E0",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #2E2E2E",
        }}
      >
        <Table variant="dark">
          <colgroup>
            <col style={{ width: "60%" }} /> {/* 과목명 */}
            <col style={{ width: "20%" }} /> {/* 학점 */}
            <col style={{ width: "20%" }} /> {/* 등급 */}
          </colgroup>
          <thead>
            <tr>
              <th
                onClick={() => setIsReal(!isReal)}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                과목명&nbsp; {isReal ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </th>
              <th>학점</th>
              <th>등급</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={index}>
                <td>{isReal ? item.subject : getRandomFakeSubject()}</td>
                <td>{item.credit}</td>
                <td>{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card.Body style={{ padding: "0" }}>
          <p style={{ fontSize: "1.2em", margin: "0" }}>15.0 학점 / 4.0 평점</p>
        </Card.Body>
      </Card>

      {/* 숨겨져 있는 성적 */}
      <h5 style={{ color: "#FFFFFF", marginBottom: "5px", fontWeight: "bold" }}>
        숨겨져 있는 성적
      </h5>
      <Card
        style={{
          backgroundColor: "#1F1F1F",
          padding: "15px",
          color: "#E0E0E0",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #2E2E2E",
        }}
      >
        <Card.Body style={{ padding: "0" }}>
          <p style={{ fontSize: "1.2em", margin: "0" }}>15.0 학점 / 4.0 평점</p>
        </Card.Body>
        {/* 패논패가 어떤 영향을 끼치는지 몰라서 보류 */}
        {/* <Card.Body>
          <p>이번 학기 패논패 없음</p>
        </Card.Body> */}
      </Card>

      {/* 입력된 모든 성적 */}
      <h5 style={{ color: "#FFFFFF", marginBottom: "5px", fontWeight: "bold" }}>
        입력된 모든 성적
      </h5>
      <Card
        style={{
          backgroundColor: "#1F1F1F",
          padding: "15px",
          color: "#E0E0E0",
          borderRadius: "8px",
          border: "1px solid #2E2E2E",
        }}
      >
        <Card.Body style={{ padding: "0" }}>
          <p style={{ fontSize: "1.2em", margin: "0" }}>15.0 학점 / 4.0 평점</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default F12Result;
