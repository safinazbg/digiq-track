import { isString } from "../getVariableType";

export const isStringWithLength = (v, trimmed) => {
  let pass = isString(v);
  if (pass) {
    if (trimmed) v = v.trim();
  }
  pass = pass && v.length > 0;
  return pass;
};

export const isStringWithMinLength = (v, trimmed) => {
  let pass = isString(v);
  if (pass) {
    if (trimmed) v = v.trim();
  }
  pass = pass && v.length > 5;
  return pass;
};
