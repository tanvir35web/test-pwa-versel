import moment from "moment";

export default function formatDate(date: string | Date, format: string) {
  return moment(date).format(format);
}
