import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateValue,
  personelValue,
  placeValue,
  timeValue,
} from "../main/SearchBox";
import TextField from "@mui/material/TextField";
import { userName, userPhone } from "./InputUserInfo";

export const buyerInfo = atom({
  key: "buyerInfo",
  default: {
    pg: "", // PG사
    pay_method: "", // 결제수단
    merchant_uid: "", // 주문번호
    amount: 1, // 결제금액
    name: "", // 주문명
    buyer_name: "", // 구매자 이름
    buyer_tel: "", // 구매자 전화번호
    buyer_email: "example@example", // 구매자 이메일
    buyer_addr: "신사동 661-16", // 구매자 주소
    buyer_postcode: "06018", // 구매자 우편번호
    m_redirect_url: "http://localhost:3000/",
  },
});

const Payment = () => {
  const setBuyerInfo = useSetRecoilState(buyerInfo);

  //filterValue
  const placeVal = useRecoilValue(placeValue);
  const dateVal = useRecoilValue(dateValue);
  const timeVal = useRecoilValue(timeValue);
  const personelVal = useRecoilValue(personelValue);
  const UserName = useRecoilValue(userName);
  const UserPhone = useRecoilValue(userPhone);

  /*   const testFun = (rsp: any) => {
    axios({
      url: "http://localhost:8080/payments/complete",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_uid: rsp.imp_uid,
        merchant_uid: rsp.merchant_uid,
        amount: rsp.amount,
        name: rsp.buyer_name,
      },
    }).then((data) => {
      //서버 결제 API 성공 시 로직
      console.log(data);
      alert("결제 성공");
    });
  };
 */

  const data = {
    pg: "kakaopay", // PG사
    pay_method: "card", // 결제수단
    merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
    amount: 1, // 결제금액
    name: "아임포트 결제 데이터 분석", // 주문명
    buyer_name: `${UserName}`, // 구매자 이름
    buyer_tel: `${UserPhone}`, // 구매자 전화번호
    buyer_email: "example@example", // 구매자 이메일
    buyer_addr: "신사동 661-16", // 구매자 주소
    buyer_postcode: "06018", // 구매자 우편번호
    m_redirect_url: "http://localhost:3000/",
  };
  const history = useHistory();
  const onClickPayment = () => {
    const { IMP } = window;
    if (IMP) {
      IMP.init("imp80957377");
    }
    if (IMP) {
      IMP.request_pay(data, callback);
    }
  };

  useEffect(() => {}, []);
  const callback = (rsp: any) => {
    const { success, error_msg } = rsp;

    if (success) {
      //axios로 HTTP요청
      // alert("결제 성공");

      history.push(`/PaymentCompletion`);
      setBuyerInfo(data);
      axios({
        url: "http://localhost:8080/payments/complete",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          imp_uid: rsp.imp_uid,
          merchant_uid: rsp.merchant_uid,
        },
      }).then((data) => {
        //서버 결제 API 성공 시 로직
        console.log(data);

        alert("결제 성공");

        setBuyerInfo(rsp);
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <div
      style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}
    >
      <h2>결제</h2>
      <h3>예약정보</h3>
      <div
        style={{
          width: "100%",
          height: "200px",
          boxSizing: "border-box",
        }}
      >
        <p>이름:{UserName}</p>
        <p>연락처:{UserPhone}</p>
        <p>장소 : {placeVal}</p>
        <p>날짜 : {dateVal}</p>
        <p>시간 : {timeVal}</p>
        <p>인원 : {personelVal}</p>
      </div>
      <div>
        {/*  <h3>결제수단</h3>
        <div>카카오페이</div>
        <div>네이버</div>
        <div>무통장입금</div> */}
      </div>
      {/*  <div
        onClick={() => {
          testFun(data);
        }}
      >
        TEST
      </div> */}
      <div
        onClick={onClickPayment}
        style={{
          width: "200px",
          height: "50px",
          lineHeight: "50px",
          fontSize: "20px",
          textAlign: "center",
          backgroundColor: "black",
          color: "#fff",
          margin: "0 auto",
        }}
      >
        결제하기
      </div>
    </div>
  );
};

export default Payment;
