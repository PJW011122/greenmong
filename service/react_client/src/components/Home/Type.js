// 241105
// Home1에 타이핑으로 들어오는 파트

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "PAARAN UOS",
          "서비스 1. F12",
          "서비스 2. 시간표",
          "서비스 3. 족보 공유",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
