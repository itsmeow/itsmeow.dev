import PropTypes from "prop-types"

const Estimate = (props) => {
  const { data } = props

  const { points, margin, slug } = data
  const usd = points * 0.05

  return (
    <div>
      <h1>Estimate for {slug}</h1>
      <p>Estimated daily points: </p>
      <h2>
        {points} pts ({usd.toFixed(3)} USD)
      </h2>
      <p>
        Error range: {margin.min} - {margin.max} ({margin.percenterror}%)
      </p>
    </div>
  )
}

Estimate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Estimate
