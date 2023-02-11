const Card = ({ title = "Current Date", year, month, day, weekday }) => {
  return (
    <div className="">
      <div className="child">
        <div className="text">{title} :</div>
        <div className="time">
          <div className="year">{year}</div>
          <div className="month">{month}</div>
          <div className="day">{day}</div>
          <div className="weekday">{weekday}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
