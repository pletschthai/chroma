import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let month = props.date.toLocaleString("default", { month: "long" });
  let year = props.date.getFullYear();
  let dayNumber = props.date.getDate();

  return `${day}, ${month} ${dayNumber} ${year}`;
}
