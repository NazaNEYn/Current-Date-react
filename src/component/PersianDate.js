function PersianDate(props) {
  // ******** Persian Date
  // Day
  const persianDay = props.date.toLocaleString('fa-IR', { day: '2-digit' })
  // Month
  const persianMonth = props.date.toLocaleString('fa-IR', { month: 'long' })
  // Year
  const persianYear = props.date.toLocaleString('fa-IR', { year: 'numeric' })
  return (
    <div>
      <div className="child">
        <div className="text">Persian Date :</div>
        <div className="year">{persianYear}</div>
        <div>{persianMonth}</div>
        <div>{persianDay}</div>
      </div>
    </div>
  )
}

export default PersianDate
