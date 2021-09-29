import { useEffect, useState } from "react";
import CustomSearch from "../components/CustomSearch";
import { apiPort } from "../tool/ApiPort";

const ComfirmReservation = () => {
  const [resultData, setResultData] = useState({ _id: "", amount: 0 });

  const [childInputVal, setChildInputVal] = useState("");

  const getChildInputVal = (val: string) => {
    setChildInputVal(val);
  };

  useEffect(() => {
    apiPort.getReservation({ id: childInputVal }).then((res) => {
      setResultData(res);
      console.log(res);
    });
  }, [childInputVal]);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <p>주문번호를 입력하슈 </p>
      <CustomSearch getChildInputVal={getChildInputVal} />
      {!resultData ? (
        <div>조회내역이 없습니다.</div>
      ) : (
        <div>
          <h3>예약번호:{resultData._id}</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%" }}>사진</div>
            <div style={{ width: "80%" }}>
              <p>장소</p>
              <p>날짜</p>
              <p>시간</p>
              <p>금액:{resultData.amount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComfirmReservation;
