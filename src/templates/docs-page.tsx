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
  margin-left: 0;
`;

const ListItem = styled.li`
  margin: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 14px;
  &.title {
    font-size: 16px;
    color: rgba(26, 83, 92, 1);
    font-weight: 600;
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
    <Container>
      <Sidenav>
        <List>
          <ListItem className="title">General</ListItem>
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
        </List>
        <List>
          <ListItem className="title">Strategies</ListItem>
          <ListItem>
            <StyledLink
              to="/docs/strategies/password/"
              activeClassName="active"
            >
              Password
            </StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Transport</ListItem>
          <ListItem>
            <StyledLink to="/docs/transport/rest/" activeClassName="active">
              Rest
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/transport/graphql/" activeClassName="active">
              Graphql
            </StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Databases</ListItem>
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
        </List>
        <List>
          <ListItem className="title">UI</ListItem>
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
        </List>
        <List>
          <ListItem className="title">Cookbook</ListItem>
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
      </Sidenav>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Container>
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
