import { isString, isArray, isObject } from "util";

export type ClassName = string | string[] | { [name: string]: boolean };

export function create(prefix: string) {
  function convert(
    name: ClassName,
    addPrefix?: boolean,
    literal?: string | boolean
  ): string {
    if (isString(name) && name.includes(" ")) {
      return convert(name.split(" "), addPrefix);
    } else if (isString(name) && name.includes(",")) {
      return convert(name.split(","), addPrefix);
    } else if (isArray(name)) {
      return name
        .map(item => convert(item, addPrefix))
        .join(" ")
        .trim();
    } else if (isObject(name)) {
      return convert(
        Object.keys(name).filter(key => (<any>name)[key]),
        addPrefix
      );
    } else if (isString(name) && name.startsWith(prefix)) {
      return name;
    } else if (isString(name)) {
      const trimedName = literal
        ? name
        : name
            .trim()
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase();
      if (!trimedName) return prefix;
      return addPrefix ? `${prefix}-${trimedName}` : trimedName;
    } else {
      return prefix;
    }
  }

  function cname(name: ClassName, literal?: string | boolean) {
    if (literal === true || literal === false) {
      return convert(name, literal);
    } else {
      let convertNames = convert(name, true);
      if (literal) {
        convertNames += ` ${convert(literal, false, true)}`;
      }
      return convertNames;
    }
  }

  return cname;
}

export const cname = create("mota-form");
