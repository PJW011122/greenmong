import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function TimetableSearch() {
  const [year, setYear] = useState();
  const [semester, setSemester] = useState();
  const [list, setList] = useState([]); // 원본 리스트
  const [filteredList, setFilteredList] = useState([]); // 필터된 리스트
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 월은 0부터 시작하므로 +1

    setYear(currentYear.toString()); // 연도 설정

    // 학기 설정: 1학기(1~6월), 2학기(7~12월)
    if (currentMonth >= 1 && currentMonth <= 6) {
      setSemester("1");
    } else {
      setSemester("2");
    }
  }, []);

  useEffect(() => {
    // year와 semester가 모두 설정되어 있으면 요청을 보냄
    if (year && semester) {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_FASTAPI}/list`,
            {
              year,
              semester,
            }
          );
          setList(response.data.INFO || []); // INFO가 없을 경우 빈 배열
          setFilteredList(response.data.INFO || []); // 필터된 리스트 초기화
        } catch (error) {
          console.error("데이터 요청 중 오류 발생:", error);
        }
      };

      fetchData();
    }
  }, [year, semester]); // year와 semester가 변경될 때마다 실행

  useEffect(() => {
    // 검색어가 변경될 때마다 리스트 필터링
    const filtered = list.filter((row) =>
      row.SUBJECT_NM.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  }, [searchTerm, list]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // 검색어 업데이트
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear(); // 현재 연도
    const years = Array.from({ length: 4 }, (_, i) => currentYear - i); // 현재 연도부터 3년 전까지
    return years.map((yr, index) => (
      <option key={index} value={yr}>
        {`${yr}`}
      </option>
    ));
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <Row className="align-items-center">
          {/* 연도 선택 */}
          <Col md="auto" className="d-flex align-items-center">
            <Form.Select
              value={year}
              onChange={handleYearChange}
              style={{ maxWidth: "100px" }}
            >
              {generateYearOptions()}
            </Form.Select>
            <Form.Label style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
              학년도
            </Form.Label>
          </Col>

          {/* 학기 선택 */}
          <Col md="auto" className="d-flex align-items-center">
            <Form.Select
              value={semester}
              onChange={handleSemesterChange}
              style={{ maxWidth: "100px" }}
            >
              <option value="1">1학기</option>
              <option value="2">2학기</option>
            </Form.Select>
            <Form.Label style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
              학기
            </Form.Label>
          </Col>

          {/* 검색 입력 */}
          <Col md={4} className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Col>
        </Row>

        {/* 리스트 표시 영역 */}
        <Row
          style={{
            marginTop: "20px",
            maxHeight: "400px",
            overflowY: "scroll",
          }}
        >
          {filteredList.length > 0 ? (
            filteredList.map((row, index) => (
              <Col md={12} key={index} className="mb-3">
                <Card
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                    backgroundColor: "#fdfdfd",
                  }}
                >
                  <Card.Body>
                    <h5
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {row.SUBJECT_NM}
                    </h5>
                    <p
                      style={{
                        margin: "0 0",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      {row.PROF_KOR_NM}
                    </p>
                    <p
                      style={{
                        margin: "0 0",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      {row.CLASS_NM}
                    </p>
                    <p
                      style={{
                        margin: "0 0",
                        color: "#777",
                        fontSize: "0.85rem",
                      }}
                    >
                      {row.SHYR}학년 {row.SUBJECT_DIV} {row.CREDIT}학점{" "}
                      {`${row.SUBJECT_NO}-${row.DVCL_NO}`}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col md={12}>
              <p style={{ textAlign: "center" }}>검색 결과가 없습니다.</p>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default TimetableSearch;
