import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
