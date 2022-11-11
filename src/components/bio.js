import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="text-pc-light">
          written by <strong>{author.name}</strong>
          <br />
          {author?.summary || null}
          {` `}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            className="text-pc-yellow"
          >
            Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
