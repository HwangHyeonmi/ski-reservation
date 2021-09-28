import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

interface props {
  id: string;
}

const StyledBox = styled.div`
  width: 50%;
  height: 400px;
  border: 1px solid gray;
  padding: 20px;
  box-sizing: border-box;
`;
const ButtonStyle = styled.div`
  width: 30%;
  height: 50px;
  line-height: 50px;
  border: 1px solid gray;
  text-align: center;
  box-sizing: border-box;
`;

const DetailPage = (id: props) => {
  const history = useHistory();
  const review = [
    { date: "2021.09.28", content: "별로입니다" },
    { date: "2021.09.28", content: "별로입니다" },
    { date: "2021.09.28", content: "별로입니다" },
    { date: "2021.09.28", content: "별로입니다" },
  ];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex" }}>
        <StyledBox>
          <h2>강사명: 김XX</h2>
          <div>IMG</div>
        </StyledBox>
        <StyledBox>
          <h3>가격: 시간당 30000</h3>
          <div style={{ display: "flex" }}>
            <ButtonStyle>날짜</ButtonStyle>
            <ButtonStyle>시간</ButtonStyle>
            <ButtonStyle>인원</ButtonStyle>
          </div>
          <h3>총 결제 금액 : 60,000</h3>
          <ButtonStyle
            onClick={() => {
              history.push(`/payment`);
            }}
            style={{
              width: "80%",
            }}
          >
            결제하기
          </ButtonStyle>
        </StyledBox>
      </div>
      <div style={{ width: "100%" }}>
        <h2>상세정보</h2>
        <p>신난다 스키강습 즐겨보자~가즈아~</p>
      </div>
      <div>
        <h2>후기 작성란</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {review.map((val, key) => {
            return (
              <div key={key} style={{ width: "50%", height: "100px" }}>
                {val.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
