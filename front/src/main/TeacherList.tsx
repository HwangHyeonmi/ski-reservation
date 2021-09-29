import { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import CustomCard from "../components/CustomCard";
import { apiPort } from "../tool/ApiPort";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const StyledTeacherList = styled.div`
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  backgroud: white;
  margin: 0 auto;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const teacherInfo = atom({
  key: "teacherInfo",
  default: [{ id: 0, name: "", region: "", score: 0, review: 0 }],
});

const TeacherList = () => {
  const history = useHistory();
  const setTeacherInfo = useSetRecoilState(teacherInfo);
  const teacherList = useRecoilValue(teacherInfo);
  useEffect(() => {
    apiPort.getTeacherList().then((res) => {
      console.log(res);
      //setTeacherInfo(res);

      setTeacherInfo(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onCardClick = (id: number) => {
    history.push(`/detail/${id}`);
  };
  /*   const teacherList = [
    { id: 1, name: "이제훈", region: "서울", score: 3.3, review: 3 },
    { id: 2, name: "이주빈", region: "서울", score: 3.3, review: 3 },
    { id: 3, name: "김태희", region: "서울", score: 3.3, review: 3 },
    { id: 4, name: "김선호", region: "서울", score: 3.3, review: 3 },
    { id: 5, name: "박보검", region: "서울", score: 3.3, review: 3 },
  ]; */
  if (teacherList) {
    return (
      <StyledTeacherList>
        {teacherList.map((val, key) => {
          return (
            <CustomCard
              key={key}
              id={val.id}
              onClick={() => {
                onCardClick(val.id);
              }}
              name={val.name}
              region={val.region}
              score={val.score}
              review={val.review}
            ></CustomCard>
          );
        })}
      </StyledTeacherList>
    );
  } else {
    return null;
  }
};

export default TeacherList;
