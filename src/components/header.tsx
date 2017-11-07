import * as React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Container from '../components/container';
import GithubIcon from '../icons/github';

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
  justify-content: space-between;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: rgba(26, 83, 92, 1);
  padding: 0 14px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    color: rgba(26, 83, 92, 0.7);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <StyledContainer>
        <div>
          <Item to="/">js-accounts</Item>
          <Item to="/docs/introduction/">Docs</Item>
          <Item to="/examples/">Examples</Item>
        </div>
        <div>
          <a href="https://github.com/js-accounts/accounts" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </StyledContainer>
    </HeaderContainer>
  );
}
