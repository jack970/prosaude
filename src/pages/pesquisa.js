import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Pesquisa" />
    <h1 className="text-center mb-4">Pesquisar</h1>
    <Search />
  </Layout>
)

export default SearchPage
