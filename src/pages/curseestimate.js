import { useState } from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLoader from "react-spinners/GridLoader"
import useEstimate from "../hooks/useEstimate"
import Estimate from "../components/estimate"
import ModForm from "../components/modform"
import { toast } from "react-toastify"
toast.configure({ position: "top-left" })

const CurseEstimate = () => {
  const [slug, setSlug] = useState()

  const { loading, error, note, estimate } = useEstimate(slug, () => {
    toast.error("Error getting points for mod")
  })

  return (
    <Layout pageInfo={{ pageName: "curseestimate" }}>
      <SEO
        title="Curse Point Estimator"
        description="Using highly advanced and top secret methods I have determined a way
          to estimate the Curse Points of a given project. Don't sue me, Curse."
      />
      <Container>
        <main>
          <>
            <h1 align="center">Curse Point Estimator</h1>
            <p>
              Using highly advanced and top secret methods I have determined a
              way to estimate the Curse Points of a given project. Don't sue me,
              Curse.
            </p>

            <ModForm
              onSubmit={value => {
                setSlug(value)
              }}
            />
          </>
          <hr />
          {loading ? (
            <div>
              <GridLoader
                css={"margin: 0 auto; display: block;"}
                color="white"
              />
              <h2>Computing with codes and algorithms...</h2>
            </div>
          ) : error ? (
            <>
              <h1>Error</h1>
              Unable to get data
              <p>{note}</p>
            </>
          ) : (
            estimate && <Estimate data={estimate} />
          )}
        </main>
      </Container>
    </Layout>
  )
}

export default CurseEstimate
