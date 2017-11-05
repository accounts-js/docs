import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';

const ChildrenContainer = styled.div`
  margin: 0 auto;
  margin-top: 82px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1170px;
`;

export default function IndexLayout({ children }) {
  return (
    <div>
      <Header />
      <ChildrenContainer>{children()}</ChildrenContainer>
    </div>
  );
}
