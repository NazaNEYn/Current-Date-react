import Card from "./Card";

const CurrentDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  // Day
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const weekday = props.date.toLocaleString("en-US", { weekday: "long" });

  return <Card year={year} month={month} day={day} weekday={weekday} />;
};

export default CurrentDate;
