function Child(props) {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    // Day
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  
    return (
      <div>
        <div className="child">
          <div className="text">Current Date :</div>
          <div className="year">{year}</div>
          <div>{month}</div>
          <div>{day}</div>
        </div>
      </div>
    )
  }
  
  export default Child
  