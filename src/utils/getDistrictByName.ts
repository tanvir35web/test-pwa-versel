import districts from "../data/district-differences.json";

export default function (name: string) {
  return districts.find((district) => district.nameEn === name);
}
