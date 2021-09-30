import { useEffect, useState } from "react";
import CustomSearch from "../components/CustomSearch";
import { apiPort } from "../tool/ApiPort";
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
interface resultData{
  _id:string,
  amount:number,
  place:string,
  date:string,
  time:string,
  personel:number,
  name:string,
}

const ComfirmReservation = () => {
  const [resultData, setResultData] = useState<resultData>();

  const [childInputVal, setChildInputVal] = useState("");

  const getChildInputVal = (val: string) => {
    setChildInputVal(val);
  };

  useEffect(() => {
    if(childInputVal){
      apiPort.getReservation({ id: childInputVal }).then((res) => {
        setResultData(res);
      });
    }
    
  }, [childInputVal]);
  const resultCom = () =>{
    if(!childInputVal||!resultData){
      return (<div style={{width:"100%",height:"100px",textAlign:"center", margin:" 30px 0",lineHeight:"100px"}}> 조회내역이 없습니다.</div>)
    }else{
      return (<div style={{border:"1px solid gray",margin:"30px 0",boxSizing:"border-box"}}>
          <h3 style={{borderBottom:"1px solid gray", margin:0,padding:"10px"}}>예약내역</h3>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <StyledRow>
                <StyledColumn1>예약번호  </StyledColumn1>
                <StyledColumn2>{resultData._id}</StyledColumn2>
              </StyledRow>
              <StyledRow>
                <StyledColumn1>강사명  </StyledColumn1>
                <StyledColumn2>{resultData.name}</StyledColumn2>
              </StyledRow>
              <StyledRow style={{borderBottom:"1px solid gray"}}>
                <StyledColumn1>장소  </StyledColumn1>
                <StyledColumn2>{resultData.place}</StyledColumn2>
              </StyledRow>
              <StyledRow style={{borderBottom:"1px solid gray"}}>
                <StyledColumn1>날짜  </StyledColumn1>
                <StyledColumn2>{resultData.date}</StyledColumn2>
              </StyledRow>
              <StyledRow style={{borderBottom:"1px solid gray"}}>
                <StyledColumn1>시간  </StyledColumn1>
                <StyledColumn2>{resultData.time}</StyledColumn2>
              </StyledRow>
              <StyledRow style={{borderBottom:"1px solid gray"}}>
                <StyledColumn1>인원  </StyledColumn1>
                <StyledColumn2>{resultData.personel}</StyledColumn2>
              </StyledRow>
              <StyledRow >
                <StyledColumn1>금액 </StyledColumn1>
                <StyledColumn2>{resultData.amount}원</StyledColumn2>
              </StyledRow>
            </div>
          </div>
        </div>
        )
    }

    
  }
  return (
    <div style={{ width: "90%", margin: "0 auto",  }}>
      <p style={{fontSize:"20px"}}>예약 조회</p>
      <CustomSearch getChildInputVal={getChildInputVal} />
      {resultCom()}
    </div>
  );
};

export default ComfirmReservation;
