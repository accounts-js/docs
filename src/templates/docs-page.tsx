import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Sidenav = styled.div`
  width: 25%;
`;

const Content = styled.div`
  width: 75%;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <Sidenav>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
