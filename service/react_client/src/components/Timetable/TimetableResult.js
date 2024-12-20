import React from "react";
import { Table } from "react-bootstrap";

function TimetableResult() {
  return (
    <div className="timetable-container" style={{ padding: "20px" }}>
      <Table bordered hover responsive style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>교시</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
        </thead>
        <tbody>
          {[
            { period: "1교시", time: "09:00 ~ 09:50" },
            { period: "2교시", time: "10:00 ~ 10:50" },
            { period: "3교시", time: "11:00 ~ 11:50" },
            { period: "4교시", time: "12:00 ~ 12:50" },
            { period: "5교시", time: "13:00 ~ 13:50" },
            { period: "6교시", time: "14:00 ~ 14:50" },
            { period: "7교시", time: "15:00 ~ 15:50" },
            { period: "8교시", time: "16:00 ~ 16:50" },
            { period: "9교시", time: "17:00 ~ 17:50" },
          ].map(({ period, time }) => (
            <tr key={period}>
              <td style={{ fontWeight: "bold", textAlign: "center" }}>
                <div style={{ fontSize: "1rem" }}>{period}</div> {/* 큰 글씨 */}
                <div style={{ fontSize: "0.8rem", color: "gray" }}>
                  {time}
                </div>{" "}
                {/* 작은 글씨 */}
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TimetableResult;
