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
            <a href="https://github.com/js-accounts/examples/tree/master/rest-express">
              Rest + expressjs + mongodb
            </a>
          </li>
        </ul>
      </div>
    </section>
  </React.Fragment>
);

export default ExamplesPage;
