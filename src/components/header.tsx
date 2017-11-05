import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Container from '../components/container';

const HeaderContainer = styled.div`
  position: fixed;
  border-bottom: 1px solid #f6f2f8;
  height: 62px;
  width: 100%;
  top: 0;
  background-color: #fff;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Item = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  padding: 0 14px;
  font-size: 14px;
  &:hover {
    color: #535e6a;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <StyledContainer>
        <Item to="/">js-accounts</Item>
        <Item to="/docs">Docs</Item>
        <Item to="/examples">Examples</Item>
        <Item to="https://github.com/js-accounts/accounts">Github</Item>
      </StyledContainer>
    </HeaderContainer>
  );
}
