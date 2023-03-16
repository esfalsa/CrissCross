import { titleCase } from "title-case";

export function canonicalize(nation: string) {
  return nation.toLowerCase().replaceAll(" ", "_");
}

export function prettify(nation: string) {
  return titleCase(nation.replaceAll("_", " "));
}
