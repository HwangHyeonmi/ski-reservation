import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiPort } from "../tool/ApiPort";
import { buyerInfo } from "./Payment";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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

const PaymentCompletion = () => {
  const userId = useRecoilValue(buyerInfo);
  const [userInfo, setUserInfo] = useState({
    buyer_name: "",
    name: "",
    amount: 0,
    buyer_tel: "",
    _id: "",
    place:"",
    date:"",
    time:"",
    personel:""
  });
  useEffect(() => {
    console.log(userId);
    console.log(userId.merchant_uid);
    apiPort.getReservation({ id: userId.merchant_uid }).then((res) => {
      console.log(res);
      setUserInfo(res);
       
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div style={{padding:"10px",boxSizing:"border-box",marginBottom:"50px" }}>
      <h2 style={{marginBottom:"50px"}}>결제가 완료되었습니다. </h2>

      <h3 style={{borderBottom:"1px solid gray", margin:0,padding:"10px",}}>결제정보</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <StyledRow>
                <StyledColumn1>
                주문번호 </StyledColumn1>
                <StyledColumn2>{userInfo._id?userInfo._id:""}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                고객명  </StyledColumn1>
                <StyledColumn2>{userInfo.buyer_name?userInfo.buyer_name:""}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                전화번호 
                </StyledColumn1>
                <StyledColumn2>{userInfo.buyer_tel?userInfo.buyer_tel:""}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                강사명  </StyledColumn1>
                <StyledColumn2>{userInfo.name?userInfo.name:""}
                </StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                결제금액  </StyledColumn1>
                <StyledColumn2> {userInfo.amount?userInfo.amount:""}원</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                  장소  </StyledColumn1>
                <StyledColumn2>{userInfo.place?userInfo.place:""}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>
                  날짜 </StyledColumn1>
                <StyledColumn2>{userInfo.date?userInfo.date:""}</StyledColumn2>
            </StyledRow>
            <StyledRow>
                <StyledColumn1>
                  시간 </StyledColumn1>
                <StyledColumn2>{userInfo.time?userInfo.time:""}</StyledColumn2>
            </StyledRow>
            <StyledRow>
                <StyledColumn1>
                  인원 </StyledColumn1>
                <StyledColumn2>{userInfo.personel?userInfo.personel:""}</StyledColumn2>
            </StyledRow>
            </div>
            
          </div>
          <div style={{textAlign:"center", marginTop:"20px"}}>
          <Button variant="outlined">
              <Link to="/confirmReservation">예약조회</Link>
          </Button>
          </div>
    </div>
  );
};

export default PaymentCompletion;
