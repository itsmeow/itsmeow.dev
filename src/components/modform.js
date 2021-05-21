import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage, setFieldValue } from "formik"

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ // eslint-disable-line no-useless-escape

const ModForm = (props) => (
  <div>
    <h1>Enter a project ID, slug, or URL</h1>
    <Formik
      initialValues={{ slug: "", daysMissed: 0 }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (values.slug.match(URL_REGEX)) {
          let url = values.slug

          if (url.endsWith("/")) {
            url = url.substring(0, url.length - 1)
          }

          props.onSubmit({
            slug: url.split("/").pop(-1),
            daysMissed: values.daysMissed,
          })
        } else {
          props.onSubmit({ slug: values.slug, daysMissed: values.daysMissed })
        }
        setSubmitting(false)
      }}
    >
      {({ isSubmitting, setFieldError }) => (
        <Form>
          <label htmlFor="slug" style={{ marginRight: "15px" }}>
            Project:
          </label>
          <Field
            id="slug"
            className="high"
            type="text"
            name="slug"
            placeholder="238222"
          />
          <ErrorMessage name="slug" />
          <br />
          <label htmlFor="days_missed" style={{ marginRight: "15px" }}>
            Days Missed (this month):
          </label>
          <Field
            className="high"
            id="days_missed"
            type="number"
            name="daysMissed"
            validate={(value) => {
              if (value < 0 && value > 31) {
                setFieldError("daysMissed", "Must be 0 to 31")
              }
            }}
          />
          <ErrorMessage name="daysMissed" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Estimate
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

ModForm.propType = {
  onSubmit: PropTypes.func.isRequired,
}

export default ModForm
