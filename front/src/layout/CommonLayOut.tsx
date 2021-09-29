import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";
import Footer from "../main/Footer";
import Header from "../main/Header";

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

const CommonLayOut = ({ children }: props) => {
  return (
    <StyledContainer>
      <Router>
        <Header />
        {/*  <SearchBox />
      <MainBody />
      <Footer /> */}
        {children}
        <Footer />
      </Router>
    </StyledContainer>
  );
};

export default CommonLayOut;
