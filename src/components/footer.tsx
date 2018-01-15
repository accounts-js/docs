import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  margin-top: 50px;
`;

export default function Footer() {
  return (
    <Container className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            The source code is licensed{' '}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
