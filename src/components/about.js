import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

function AboutMe({ className, path }) {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar-2020.JPG" }) {
        childImageSharp {
          fixed(width: 55, height: 55, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={`flex items-center ${className}`}>
      <Img
        alt="Jacob Arriola"
        className="rounded-full flex-shrink-0 shadow"
        fixed={file.childImageSharp.fixed}
      />

      <div className="ml-4">
        {path === '/' ? (
          <h1 className="text-sm md:text-lg">Personal site of Jacob Arriola</h1>
        ) : (
          <p className="font-bold text-sm md:text-lg">
            Personal site of Jacob Arriola
          </p>
        )}
        <p className="text-sm md:text-base">
          Web developer, backyard farmer and yogi.
        </p>
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string,
}

export default AboutMe
