import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <div dateTime={dateString}>{format(date, "LLLL d, yyyy")}</div>;
}
