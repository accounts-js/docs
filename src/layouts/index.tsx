import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.scss';

require('prismjs/themes/prism-okaidia.css');

const StyledContainer = styled.div`
  margin-top: 20px;
`;
export default function IndexLayout({ children }) {
  return (
    <div>
      <Header />
      <StyledContainer>{children()}</StyledContainer>
      <Footer />
    </div>
  );
}
