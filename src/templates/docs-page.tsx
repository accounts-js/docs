import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
`;

const Sidenav = styled.div`
  width: 25%;
  padding: 30px 20px 20px;
  background-color: rgba(0, 0, 0, 0.03);
`;

const Content = styled.div`
  width: 75%;
  padding: 30px 40px 20px;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 13px;
`;

const ListItem = styled.li`
  font-size: 14px;
  &.title {
    margin-bottom: 0.6rem !important;
  }
  &.title:not(:first-child) {
    margin-top: 1.5rem !important;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(26, 83, 92, 1);
  &:hover {
    color: rgba(26, 83, 92, 0.7);
  }
  &.active {
    color: #52b5b4;
    font-weight: 600;
  }
`;

const EditButton = styled.a`
  color: rgba(10, 10, 10, 0.5) !important;
`;

export default ({ data, pathContext }) => {
  const post = data.markdownRemark;
  let slug = pathContext.slug;
  // remove last char
  slug = slug.substring(0, slug.length - 1);
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <Helmet>
            <title>{post.frontmatter.title}</title>
          </Helmet>
          <div className="column is-one-fifth">
            <List>
              <ListItem className="title is-6">General</ListItem>
              <ListItem>
                <StyledLink to="/docs/introduction/" activeClassName="active">
                  Introduction
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/docs/configure/" activeClassName="active">
                  Configure
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/docs/emails/" activeClassName="active">
                  Emails
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/docs/hooks/" activeClassName="active">
                  Hooks
                </StyledLink>
              </ListItem>
              <ListItem className="title is-6">Strategies</ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/strategies/password/"
                  activeClassName="active"
                >
                  Password
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/strategies/facebook/"
                  activeClassName="active"
                >
                  Facebook
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/strategies/twitter/"
                  activeClassName="active"
                >
                  Twitter
                </StyledLink>
              </ListItem>
              <ListItem className="title is-6">Transport</ListItem>
              <ListItem>
                <StyledLink to="/docs/transport/rest/" activeClassName="active">
                  Rest
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/transport/graphql/"
                  activeClassName="active"
                >
                  Graphql
                </StyledLink>
              </ListItem>
              <ListItem className="title is-6">Databases</ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/databases/mongo/"
                  activeClassName="active"
                >
                  Mongo
                </StyledLink>
              </ListItem>
              <ListItem className="title is-6">Cookbook</ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/cookbook/express/"
                  activeClassName="active"
                >
                  Express
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  to="/docs/cookbook/meteor/"
                  activeClassName="active"
                >
                  Meteor
                </StyledLink>
              </ListItem>
            </List>
          </div>
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="has-text-right">
              <EditButton
                className="button is-white"
                href={`https://github.com/accounts-js/docs/tree/master/src/pages${slug}.md`}
                target="_blank"
              >
                Edit this page on Github
              </EditButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
