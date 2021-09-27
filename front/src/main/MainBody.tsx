import React from "react";
import styled from "styled-components";
import TeacherList from "./TeacherList";

const StyledMainBody = styled.div`
  border-radius: 0.25rem;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
  width: 100%;
  height: auto;
`;

const MainBody = () => {
  return (
    <StyledMainBody>
      <TeacherList></TeacherList>
    </StyledMainBody>
  );
};

export default MainBody;
