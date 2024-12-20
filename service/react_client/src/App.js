import React, { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import F12 from "./components/F12/F12";
import Timetable from "./components/Timetable/Timetable";
import Solution from "./components/Solution/Solution";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // 페이지 이동 시 스크롤 최상단으로
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [backendStatus, setBackendStatus] = useState("연결 중...");

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // 백엔드 연결 확인
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_FASTAPI}/health`) // FastAPI 서버의 주소 (개발)
      // .get(`/health`) // FastAPI 서버의 주소 (배포)
      .then((response) => {
        setBackendStatus("연결 성공!"); // 응답 성공 시 상태 업데이트
      })
      .catch((error) => {
        setBackendStatus("연결 실패!"); // 오류 시 상태 업데이트
      });
  }, []);

  return (
    <Router>
      {/* 로딩 상태에 따라 Preloader 표시 */}
      <Preloader load={load} />
      {/* 로딩 상태에 따라 스크롤 잠금 */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        {/* <div className="backend-status">{backendStatus}</div>{" "} */}
        {/* 백엔드 상태 표시 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/f12" element={<F12 />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
