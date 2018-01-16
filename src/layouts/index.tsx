import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.scss';
import '../styles/prism-github.css';

const StyledContainer = styled.div`
  margin-top: 20px !important;
`;
export default function IndexLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <StyledContainer className="container">{children()}</StyledContainer>
      <Footer />
    </React.Fragment>
  );
}
