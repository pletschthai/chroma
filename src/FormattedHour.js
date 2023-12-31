export default function FormattedHour(props) {
  let hours = props.hour.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.hour.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
