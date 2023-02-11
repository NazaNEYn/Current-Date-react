import Card from "./Card";

function PersianDate(props) {
  // ******** Persian Date
  // Day
  const persianDay = props.date.toLocaleString("fa-IR", { day: "2-digit" });
  // Month
  const persianMonth = props.date.toLocaleString("fa-IR", { month: "long" });
  // Year
  const persianYear = props.date.toLocaleString("fa-IR", { year: "numeric" });
  const persianWeekday = props.date.toLocaleString("fa-IR", {
    weekday: "long",
  });

  return (
    <Card
      title="Persian Date"
      year={persianYear}
      month={persianMonth}
      day={persianDay}
      weekday={persianWeekday}
    />
  );
}

export default PersianDate;
