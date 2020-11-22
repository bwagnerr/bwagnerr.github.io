import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, customClasses }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={customClasses}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
