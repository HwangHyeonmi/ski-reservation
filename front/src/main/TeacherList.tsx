import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import CustomCard from "../components/CustomCard";

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

const TeacherList = () => {
  const history = useHistory();
  const onCardClick = (id: number) => {
    history.push(`/detail/${id}`);
  };
  const teacherList = [
    { id: 0, name: "황현미", region: "서울", score: 3.3, review: 3 },
    { id: 1, name: "황현미", region: "서울", score: 3.3, review: 3 },
    { id: 2, name: "황현미", region: "서울", score: 3.3, review: 3 },
    { id: 3, name: "황현미", region: "서울", score: 3.3, review: 3 },
    { id: 4, name: "황현미", region: "서울", score: 3.3, review: 3 },
  ];

  return (
    <StyledTeacherList>
      {teacherList.map((val, key) => {
        return (
          <CustomCard
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
};

export default TeacherList;
