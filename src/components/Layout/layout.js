import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import InnerHeader from "../InnerHeader"
import HeaderNav from "../HeaderNav"
import SectionNav from '../SectionNav'
import GlobalStyles from "../../Styles/global"
import NavBar from '../NavBar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <HeaderNav title={data.site.siteMetadata.title}/>
      <NavBar />
      <InnerHeader 
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
        />
      <SectionNav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
