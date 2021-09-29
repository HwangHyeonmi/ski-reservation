import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiPort } from "../tool/ApiPort";
import { buyerInfo } from "./Payment";

const PaymentCompletion = () => {
  const userId = useRecoilValue(buyerInfo);
  const [userInfo, setUserInfo] = useState({
    buyer_name: "",
    name: "",
    amount: 0,
    buyer_tel: "",
    _id: "",
  });
  useEffect(() => {
    console.log(userId);
    console.log(userId.merchant_uid);
    apiPort.getReservation({ id: userId.merchant_uid }).then((res) => {
      console.log(res);
      setUserInfo(res);
    });
  }, []);
  return (
    <div>
      <p>결제성공했습니다</p>
      <div>
        <h2>결제데이터</h2>
        <p>주문번호: {userInfo._id}</p>
        <p>고객명: {userInfo.buyer_name}</p>
        <p>전화번호 :{userInfo.buyer_tel}</p>
        <p>주문명: {userInfo.name}</p>
        <p>결제금액: {userInfo.amount}</p>
      </div>
    </div>
  );
};

export default PaymentCompletion;
