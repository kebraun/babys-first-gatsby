import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Detective Columbo shooting lightning from two held up fingers as he says 'that's magic, wizardry'."
        src="../images/bumbo.png"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage