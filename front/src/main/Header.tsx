import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
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
      <Button variant="text">
        <Link to="/">Daiski</Link>{" "}
      </Button>
      {/*  <Button variant="outlined">
        <Link to="/detail">상세페이지</Link>{" "}
      </Button> */}
      <Button variant="outlined">
        <Link to="/confirmReservation">예약조회</Link>
      </Button>
    </StyledHeader>
  );
};

export default Header;
