import { useEffect } from "react";
import { useHistory } from "react-router";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import SearchBox from "../main/SearchBox";
import { teacherInfo } from "../main/TeacherList";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CustomButton from "../components/CustomButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


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
    { date: "2021.09.28", content: "그닥", rating: 2 },
  ];
  const teacherlist = useRecoilValue(teacherInfo);

  const setCurrentTeacher = useSetRecoilState(currentTeacherInfo);
  const currentTeacher = useRecoilValue(currentTeacherInfo);
  useEffect(() => {
    for (let i = 0; i < teacherlist.length; i++) {
      if (Number(id.id) === i + 1) {
        setCurrentTeacher(teacherlist[i]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherlist]);

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

          <CustomButton name="결제하기" onClick={()=>{
        
            history.push(`/InputUserInfo`);
          }} />
         
        </StyledBox>
      </div>
      <div style={{ width: "100%",padding:"20px 20px 50px 20px", boxSizing:"border-box"  }}>
        <h2>상세정보</h2>
        <p>신난다 스키강습 즐겨보자~</p>
      </div>
      <div style={{width:"100%", padding:"20px 20px 50px 20px", boxSizing:"border-box"}}>
        <div style={{display:"flex"}}>
          <h2>후기 작성란</h2>
          
        </div>
        <Button style={{left:"90%"}} onClick={()=>{
          alert("준비중입니다")
        }}>
              + 후기 작성하기
        </Button>
        
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          
          {review.map((val, key) => {
            return (
              <div key={key} style={{padding:"10px", width: "50%", height: "100px",border:"1px solid gray",boxSizing:"border-box" }}>
              
                <>
                  <Typography variant="body2" color="text.secondary">
                    평점 : <Rating style={{fontSize:"1rem",top:"2px"}} name="read-only" value={val.rating} readOnly />
                  </Typography>
                </>
               
                <p>{val.content}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
