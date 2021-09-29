import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import SearchBox from "../main/SearchBox";
import { teacherInfo } from "../main/TeacherList";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface props {
  id: string;
}

const StyledBox = styled.div`
  width: 50%;
  height: 500px;
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

export const currentTeacherInfo = atom({
  key: "currentTeacher",
  default: { id: 0, name: "", region: "", score: 0, review: 0 },
});
const DetailPage = (id: props) => {
  const history = useHistory();
  const review = [
    { date: "2021.09.28", content: "너무 좋아요", rating: 5 },
    { date: "2021.09.28", content: "별로네요", rating: 1 },
    { date: "2021.09.28", content: "재밌었어요", rating: 4 },
    { date: "2021.09.28", content: "유익했습니다", rating: 2 },
  ];
  const teacherlist = useRecoilValue(teacherInfo);

  const setCurrentTeacher = useSetRecoilState(currentTeacherInfo);
  const currentTeacher = useRecoilValue(currentTeacherInfo);
  useEffect(() => {
    console.log(id);
    for (let i = 0; i < teacherlist.length; i++) {
      if (Number(id.id) === i + 1) {
        setCurrentTeacher(teacherlist[i]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherlist]);

  const paymentButtonClick = () => {
    console.log("paymentButtonClick");
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex" }}>
        <StyledBox>
          <h2>강사명: {currentTeacher.name}</h2>
          <div style={{ width: "300px", height: "300px", overflow: "hidden" }}>
            <img
              alt="lecturer"
              style={{ width: "100%" }}
              src={`/images/lecturer/lecturer${currentTeacher.id}.jpg`}
            />
          </div>
        </StyledBox>
        <StyledBox>
          <h3>가격: 시간당 1원</h3>
          <div style={{ display: "flex", height: "auto !important" }}>
            <SearchBox searchval={false} />
          </div>
          <h3>총 결제 금액 : 1원</h3>
          <ButtonStyle
            onClick={() => {
              paymentButtonClick();

              history.push(`/InputUserInfo`);
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
        <p>신난다 스키강습 즐겨보자~</p>
      </div>
      <div>
        <h2>후기 작성란</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {review.map((val, key) => {
            return (
              <div key={key} style={{ width: "50%", height: "100px" }}>
                {val.content}
                <>
                  <Typography component="legend">평점</Typography>
                  <Rating name="read-only" value={val.rating} readOnly />
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
