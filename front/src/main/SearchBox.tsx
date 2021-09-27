import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import CustomSelect from "../components/CustomSelect";
const StyledSearchBox = styled.div`
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  backgroud: white;
  margin: 0 auto;
  height: 150px;
  padding: 40px;
  box-sizing: border-box;
`;

const SearchBox = () => {
  const array = [
    "비발디파크(홍천)",
    "휘닉스파크(평창)",
    "하이원리조트(경선)",
    "곤지암리조트(광주)",
    "웰리힐리파크(횡성)",
  ];

  return (
    <StyledSearchBox>
      <CustomSelect name="장소" selectArray={array} />
      <CustomSelect name="날짜" selectArray={array} />
      <CustomSelect name="시간" selectArray={array} />
      <CustomSelect name="인원" selectArray={array} />
      <Button variant="outlined">검색하기</Button>
    </StyledSearchBox>
  );
};

export default SearchBox;
