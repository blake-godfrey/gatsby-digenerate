/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
        <main>{children}</main>
        <footer className="bg-black text-[#dcdcdc] py-4">
					<div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                &copy; {new Date().getFullYear()} digenerate. All rights reserved.
              </div>

              <div>
                <ul className="flex m-0 space-x-4">
                  <li className="mb-0">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} size="1x" className="text-[#dcdcdc]" />
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedinIn} size="1x" className="text-[#dcdcdc]" />
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} size="1x" className="text-[#dcdcdc]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
					</div>
        </footer>
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
