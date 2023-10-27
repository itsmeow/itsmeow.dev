const Card = (props) => {
  return (
    <div className="card-basic">
      <a rel="noopener noreferrer" target="_blank" href={props.link}>
        {props.children}
        <div>
          {props.text}
          {props.lowerText && (
            <>
              <br />
              <span className="lower-text">{props.lowerText}</span>
            </>
          )}
        </div>
      </a>
    </div>
  )
}

const CardList = (props) => {
  return <div className="card-list">{props.children}</div>
}

export { Card, CardList }
