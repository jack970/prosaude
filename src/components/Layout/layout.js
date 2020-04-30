import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import InnerHeader from "../InnerHeader"
import HeaderNav from "../HeaderNav"
import SectionNav from '../SectionNav'
import GlobalStyles from "../../Styles/global"
import NavBar from '../NavBar'
import Footer from "../Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          address
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <HeaderNav title={data.site.siteMetadata.title}/>
      <InnerHeader 
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
        />
      <NavBar />
      <SectionNav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer 
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      address = {data.site.siteMetadata.address}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
