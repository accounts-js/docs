import * as React from 'react';
import { Helmet } from 'react-helmet';

const ExamplesPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Examples</title>
    </Helmet>
    <section className="section">
      <div className="container">
        <p>Examples on how to use the @js-accounts packages:</p>
        <ul>
          <li>
            <a href="https://github.com/accounts-js/examples/tree/master/rest-express-typescript">
              Rest + Expressjs + Mongodb
            </a>
          </li>
          <li>
            <a href="https://github.com/accounts-js/examples/tree/master/react-typescript">
              React + Rest
            </a>
          </li>
        </ul>
      </div>
    </section>
  </React.Fragment>
);

export default ExamplesPage;
