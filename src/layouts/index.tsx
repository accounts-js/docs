import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Container from '../components/container';

require('prismjs/themes/prism-okaidia.css');

const StyledContainer = styled(Container)`
  margin-top: 62px;
`;

export default function IndexLayout({ children }) {
  return (
    <div>
      <Header />
      <StyledContainer>{children()}</StyledContainer>
    </div>
  );
}
