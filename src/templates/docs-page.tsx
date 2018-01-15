import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

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
    color: #ff6b6b;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="container">
      <div className="columns">
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
            <ListItem className="title is-6">Strategies</ListItem>
            <ListItem>
              <StyledLink
                to="/docs/strategies/password/"
                activeClassName="active"
              >
                Password
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
              <StyledLink to="/docs/databases/mongo/" activeClassName="active">
                Mongo
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/docs/databases/redis/" activeClassName="active">
                Redis
              </StyledLink>
            </ListItem>
            <ListItem className="title is-6">UI</ListItem>
            <ListItem>
              <StyledLink to="/docs/ui/react/" activeClassName="active">
                React
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/docs/ui/react-native/" activeClassName="active">
                React-native
              </StyledLink>
            </ListItem>
            <ListItem className="title is-6">Cookbook</ListItem>
            <ListItem>
              <StyledLink to="/docs/cookbook/express/" activeClassName="active">
                Express
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/docs/cookbook/meteor/" activeClassName="active">
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
        </div>
      </div>
    </div>
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
