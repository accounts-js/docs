import * as React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <React.Fragment>
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">accounts-js</h1>
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
