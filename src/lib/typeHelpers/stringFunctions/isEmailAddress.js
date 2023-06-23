import {isStringWithLength} from "@/lib/typeHelpers/stringFunctions/isStringWithLength";

export const isEmailAddress = to => {
  let pass = isStringWithLength(to, true)
  return pass && /[^@]+@[^@]+\.[^.]+/.test(to.trim())
}
