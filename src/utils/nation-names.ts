import { titleCase } from "title-case";

export function canonicalize(nation: string) {
  return nation.trim().toLowerCase().replaceAll(/\s+/g, "_");
}

export function prettify(nation: string) {
  return titleCase(nation.trim().replaceAll("_", " "));
}
