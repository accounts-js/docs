import * as React from 'react';
import Link from 'gatsby-link';
import * as logo from '../img/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
  max-height: 80px;
  margin-bottom: 40px;
`;

const IndexPage = () => (
  <React.Fragment>
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Logo src={logo} alt="Accounts-js logo" height="20" />
          <h2 className="subtitle">
            Fullstack authentication and accounts-management for Javascript
          </h2>
          <Link className="button" to="/docs/introduction/">
            Get started
          </Link>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default IndexPage;
