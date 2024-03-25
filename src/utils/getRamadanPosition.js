export default function getRamadanPosition(numberOfRamadan) {
  let suffix;

  switch (numberOfRamadan) {
    case 1:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
      suffix = "ম";
      break;
    case 2:
    case 3:
      suffix = "য়";
      break;
    case 4:
      suffix = "র্থ";
      break;
    case 6:
      suffix = "ষ্ঠ";
      break;
    default:
      suffix = "তম";
  }

  return numberOfRamadan + suffix;
}
