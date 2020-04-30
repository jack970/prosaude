import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Nada foi Encontrado</h1>
    <p>Possivelmente você tentou acessar uma página inexistente.</p>
  </Layout>
)

export default NotFoundPage
