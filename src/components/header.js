import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <header className="bg-[#21a7a9] py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>

        <div>
          <ul className="flex m-0 space-x-4">
            <li className="mb-0">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} size="1x" className="text-white" />
              </a>
            </li>
            <li className="mb-0">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" className="text-white" />
              </a>
            </li>
            <li className="mb-0">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="1x" className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
