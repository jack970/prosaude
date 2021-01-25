import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderNav from "../Header/HeaderNav"
import GlobalStyles from "../../Styles/global"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitulo {
      site {
        siteMetadata {
          title
          description
          address
          menuHeader {
            label
            submenu {
              label
              url
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <HeaderNav title={data.site.siteMetadata.title} />
      <Header
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        menu={data.site.siteMetadata.menuHeader}
      />
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
        address={data.site.siteMetadata.address}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
