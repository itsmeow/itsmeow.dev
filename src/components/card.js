const Card = (props) => {
  return (
    <div className="card-basic">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        {props.children}
        <p>{props.text}</p>
      </a>
    </div>
  )
}

const CardList = (props) => {
  return <div className="card-list">{props.children}</div>
}

export { Card, CardList }
