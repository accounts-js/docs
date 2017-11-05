import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  border-bottom: 1px solid #f6f2f8;
  height: 62px;
  width: 100%;
  top: 0;
`;

const Content = styled.div`
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1170px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <Container>
      <Content>Header dsjqodqs dslisqdijdsqjsqdij</Content>
    </Container>
  );
}
