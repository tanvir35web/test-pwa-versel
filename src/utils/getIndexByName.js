export default function (
  array,
  key,
  value,
  options = {
    convertToLowercase: false,
  },
) {
  return array.findIndex((districtDifferenceObject) => {
    if (options.convertToLowercase) {
      return (
        districtDifferenceObject[key].toLowerCase() === value.toLowerCase()
      );
    } else {
      return districtDifferenceObject[key] === value;
    }
  });
}
