import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="The page linked doesn't exist!" image="/" />
    <div class="center-item">
      <h1>Error 404: Page not found</h1>
      <Link to="/" className="link-no-style">
        <Button variant="primary">Take me home!</Button>
      </Link>
      <Button
        variant="primary"
        style={{ margin: "10px" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.history.back()
          }
        }}
      >
        Go back to my last page!
      </Button>
    </div>
  </Layout>
)

export default NotFoundPage
