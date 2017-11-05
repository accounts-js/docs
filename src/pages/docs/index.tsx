import * as React from 'react';
import Link from 'gatsby-link';

const DocsPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default DocsPage;

export const query = graphql`
  query IndexQuery {
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
