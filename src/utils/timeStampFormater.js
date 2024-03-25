function dateToTimestamp(dateString) {
  const date_format = "MMMM DD, YYYY h:mm A";
  const date_time_obj = new Date(dateString);
  const timestamp = Math.floor(date_time_obj.getTime() / 1000);
  return timestamp;
}

// Example usage:
const inputDate = "March 12, 2024 6:10 PM";
const unixTimestamp = dateToTimestamp(inputDate);
console.log("Unix timestamp:", unixTimestamp);
