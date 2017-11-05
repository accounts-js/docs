import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Sidenav = styled.div`
  width: 25%;
  padding: 30px 20px 20px;
  background-color: #f7f9fa;
`;

const Content = styled.div`
  width: 75%;
  padding: 30px 20px 20px;
`;

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
  &.title {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Sidenav>
        <List>
          <ListItem className="title">General</ListItem>
          <ListItem>
            <StyledLink to="/docs/introduction/">Introduction</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/configure/">Configure</StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Strategies</ListItem>
          <ListItem>
            <StyledLink to="/docs/strategies/password/">Password</StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Transport</ListItem>
          <ListItem>
            <StyledLink to="/docs/transport/rest/">Rest</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/transport/graphql/">Graphql</StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Databases</ListItem>
          <ListItem>
            <StyledLink to="/docs/databases/mongo/">Mongo</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/databases/redis/">Redis</StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">UI</ListItem>
          <ListItem>
            <StyledLink to="/docs/ui/react/">React</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/ui/react-native/">React-native</StyledLink>
          </ListItem>
        </List>
        <List>
          <ListItem className="title">Cookbook</ListItem>
          <ListItem>
            <StyledLink to="/docs/cookbook/express/">Express</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/docs/cookbook/meteor/">Meteor</StyledLink>
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
