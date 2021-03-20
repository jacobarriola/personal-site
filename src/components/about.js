import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

function AboutMe({ className, path }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex-shrink-0">
        <StaticImage
          src="../images/avatar-2020.JPG"
          alt="Jacob Arriola avatar"
          width={55}
          height={55}
          formats={['auto', 'avif', 'webp']}
          className="rounded-full  shadow"
          loading={path === '/' ? 'eager' : 'lazy'}
          quality={100}
        />
      </div>

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
