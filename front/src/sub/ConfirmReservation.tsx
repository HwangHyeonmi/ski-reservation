import React, { useEffect, useState } from "react";
import { apiPort } from "../tool/ApiPort";

interface resultData {
  id: number;
}

const ComfirmReservation = () => {
  const [resultData, setResultData] = useState<resultData[]>([]);

  useEffect(() => {
    apiPort.getReservation("mid_1632820754417").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h3>예약번호:</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>사진</div>
        <div style={{ width: "80%" }}>
          <p>장소</p>
          <p>날짜</p>
          <p>시간</p>
          <p>금액</p>
        </div>
      </div>
    </div>
  );
};

export default ComfirmReservation;
