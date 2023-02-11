const CurrentDate = (props) => {
  const year = props.date.getFullYear()
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  // Day
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const weekday = props.date.toLocaleString('en-US', { weekday: 'long' })

  return (
    <div className="">
      <div className="child">
        <div className="text">Current Date :</div>
        <div className="time">
          <div className="year">{year}</div>
          <div className="month">{month}</div>
          <div className="day">{day}</div>
          <div className="weekday">{weekday}</div>
        </div>
      </div>
    </div>
  )
}

export default CurrentDate
