import * as React from 'react';
import 'bulma';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import Container from '../components/container';

require('prismjs/themes/prism-okaidia.css');

const StyledContainer = styled(Container)`
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
