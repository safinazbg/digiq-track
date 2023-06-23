
export const capitalize = string => {
  let capitalized = ''
  string = string ?? ''
  string = string.toString()
  if (string) capitalized = `${ string.charAt(0).toUpperCase() }${ string.substring(1) }`
  return capitalized
}
export const decapitalize = (string = '') => {
  let decapitalized = ''
  string = string ?? ''
  string = string.toString()
  if (string) decapitalized = string.charAt(0).toLowerCase() + string.substring(1)
  return decapitalized
}
