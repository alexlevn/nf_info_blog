import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = data

  const nav = (
    <div className="flex justify-between gap-5">
      {previous ? (
        <div className="bg-pc-darker m-5 rounded-md  w-1/2">
          <Link href="#" to={previous.fields.slug} rel="prev">
            <a className="text-pc-light hover:text-pc-pink inline-block">
              ← {previous.frontmatter.title}
            </a>
          </Link>
        </div>
      ) : (
        <div />
      )}
      {next ? (
        <div className="bg-pc-darker m-5 rounded-md w-1/2">
          <Link to={next.fields.slug} href="#" rel="next">
            <a className="text-pc-light hover:text-pc-pink">
              {next.frontmatter.title} →
            </a>
          </Link>
        </div>
      ) : (
        <div />
      )}
    </div>
  )

  return (
    <Layout location={location} title={siteTitle}>
      {nav}
      <article className="text-pc-light">
        <header>
          <h1 className="text-3xl font-semibold text-pc-yellow font-mont">
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.date}</p>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="acticleBody"
        />

        <hr />

        <footer>
          <Bio />
        </footer>

        {nav}
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
