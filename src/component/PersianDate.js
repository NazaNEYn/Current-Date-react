function PersianDate(props) {
  // ******** Persian Date
  // Day
  const persianDay = props.date.toLocaleString('fa-IR', { day: '2-digit' })
  // Month
  const persianMonth = props.date.toLocaleString('fa-IR', { month: 'long' })
  // Year
  const persianYear = props.date.toLocaleString('fa-IR', { year: 'numeric' })
  const persianWeekday = props.date.toLocaleString('fa-IR', { weekday: 'long' })

  return (
    <div className="">
      <div className="child">
        <div className="text">Persian Date :</div>
        <div className="time">
          <div className="year">{persianYear}</div>
          <div className="month">{persianMonth}</div>
          <div className="day">{persianDay}</div>
          <div className="weekday">{persianWeekday}</div>
        </div>
      </div>
    </div>
  )
}

export default PersianDate
