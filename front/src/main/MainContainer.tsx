import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const StyledContainer = styled.div`
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  backgroud: white;
  margin: 0 auto;
  max-width: 1200px;
`;

interface props {
  children: JSX.Element;
}

const MainContainer = () => {
  return (
    <>
      <SearchBox />
      <MainBody />
    </>
  );
};

export default MainContainer;
