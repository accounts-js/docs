import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.scss';
import '../styles/prism-github.css';

export default function IndexLayout({ children }) {
  return (
    <React.Fragment>
      <Helmet defaultTitle="accounts-js" titleTemplate="%s - accounts-js">
        <meta
          name="description"
          content="Fullstack authentication and accounts-management for Javascript"
        />
      </Helmet>
      <Header />
      {children()}
      <Footer />
    </React.Fragment>
  );
}
