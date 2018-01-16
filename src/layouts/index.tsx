import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
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
      <Helmet
        defaultTitle="accounts-js"
        titleTemplate="%s - accounts-js"
      >
        <meta name="description" content="Fullstack authentication and accounts-management for Javascript" />
      </Helmet>
      <Header />
      <StyledContainer className="container">{children()}</StyledContainer>
      <Footer />
    </React.Fragment>
  );
}
