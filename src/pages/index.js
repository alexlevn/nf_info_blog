import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        Home Page !
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />

      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <div
            key={post.fields.slug}
            className="my-10 shadow-lg shadow-gray-800 rounded-md py-6 px-3 bg-pc-darker"
          >
            <div className="flex justify-between items-center ">
              <Link to={post.fields.slug}>
                <div className="text-pc-yellow font-medium md:text-2xl  font-sans hover:text-pc-pink cursor-pointer debug">
                  {title}
                </div>
              </Link>

              <div className="flex justify-items items-center ">
                <div className="text-sm text-gray-600 whitespace-nowrap">
                  {post.frontmatter.date}
                </div>
              </div>
            </div>

            <div className="mt-2 text-pc-light">{post.excerpt}</div>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
