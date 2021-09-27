import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
const StyledHeader = styled.div`
  border-radius: 0.25rem;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
  width: 100%;
  height: 80px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Button variant="outlined">LOGO </Button>
      <Button variant="outlined">예약조회</Button>
    </StyledHeader>
  );
};

export default Header;
