import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Search from '../components/Search'

const SearchPage = () => (
  <Layout>
    <SEO title="Pesquisa" />
    <Link to="/">Pesquisar</Link>
    <Search />
  </Layout>
)

export default SearchPage
