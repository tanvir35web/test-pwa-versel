import districts from "../data/district-differences.json";

export default function (id: number) {
  return districts.find((district) => district.id === id);
}
