import React from "react";
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
  const onCardClick = () => {};
  const teacherList = [
    { name: "황현미", region: "서울", score: 3.3, review: 3 },
    { name: "황현미", region: "서울", score: 3.3, review: 3 },
    { name: "황현미", region: "서울", score: 3.3, review: 3 },
    { name: "황현미", region: "서울", score: 3.3, review: 3 },
    { name: "황현미", region: "서울", score: 3.3, review: 3 },
  ];

  return (
    <StyledTeacherList>
      {teacherList.map((val, key) => {
        return (
          <CustomCard
            onClick={onCardClick}
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
