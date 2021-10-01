import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateValue,
  personelValue,
  placeValue,
  timeValue,
} from "../main/SearchBox";
import { userName, userPhone } from "./InputUserInfo";
import CustomButton from "../components/CustomButton";
import { currentTeacherInfo } from "./DetailPage";
import styled from "styled-components";
const StyledRow = styled.div`
border-bottom:1px solid gray;
`;
const StyledColumn1 = styled.span`
background-color:#ededed;
border-right:1px solid #000;
width:15%;
display:inline-block;
padding:10px;
box-sizing:border-box;
`;

const StyledColumn2 = styled.span`
padding-left:20px;
`;

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
    place:"",
    date:"",
    time:"",
    personel:"",
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
  const CurrentTeacher = useRecoilValue(currentTeacherInfo);

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
    name: `${CurrentTeacher.name}`, // 주문명
    buyer_name: `${UserName}`, // 구매자 이름
    buyer_tel: `${UserPhone}`, // 구매자 전화번호
    buyer_email: "example@example", // 구매자 이메일
    buyer_addr: "신사동 661-16", // 구매자 주소
    buyer_postcode: "06018", // 구매자 우편번호
    m_redirect_url: "http://localhost:3000/",
    place:`${placeVal}`, //예약장소
    date:`${dateVal}`, //예약날짜
    time: `${timeVal}`, //예약시간
    personel: `${personelVal}` //예약 인원
    
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
    setBuyerInfo(data);
    if (success) {
      //axios로 HTTP요청
      // alert("결제 성공");

      
      
      axios({
        url: "http://localhost:8080/payments/complete",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          imp_uid: rsp.imp_uid,
          merchant_uid: rsp.merchant_uid,
          place:`${placeVal}`,
          date:`${dateVal}`,
          time:`${timeVal}`,
          personel:`${personelVal}`
        },
      }).then((data) => {
        //서버 결제 API 성공 시 로직
        console.log(data);

        alert("결제 성공");
        history.push(`/PaymentCompletion`);
        
      });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <div
      style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}
    >
  {/*     <h2>결제 정보</h2> */}
      <div style={{border:"1px solid gray",margin:"30px 0",boxSizing:"border-box"}}>
          <h3 style={{borderBottom:"1px solid gray", margin:0,padding:"10px"}}>예약정보</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <StyledRow>
                <StyledColumn1>
                  이름 </StyledColumn1>
                <StyledColumn2>{UserName}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                연락처  </StyledColumn1>
                <StyledColumn2>{UserPhone}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                장소  </StyledColumn1>
                <StyledColumn2>{placeVal}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                  날짜  </StyledColumn1>
                <StyledColumn2>{dateVal}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                  시간  </StyledColumn1>
                <StyledColumn2>{timeVal}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                  인원  </StyledColumn1>
                <StyledColumn2>{personelVal}</StyledColumn2>
              </StyledRow>
              <StyledRow >
                <StyledColumn1>금액 </StyledColumn1>
                <StyledColumn2>1원</StyledColumn2>
              </StyledRow>
            </div>
          </div>
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
   
        <br/>
        <CustomButton name="결제하기" onClick={onClickPayment} />
       
    
    </div>
  );
};

export default Payment;
