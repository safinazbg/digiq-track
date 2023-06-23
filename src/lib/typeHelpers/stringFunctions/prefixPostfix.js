export const withPrefix = (string = '', prefix = '') => string.startsWith(prefix) ? string : prefix + string
export const withoutPrefix = (string = '', prefix = '') => !string.startsWith(prefix) ? string : string.slice(prefix.length)
export const withPostfix = (string = '', postfix = '') => string.endsWith(postfix) ? string : string + postfix
export const withoutPostfix = (string = '', postfix = '') => !string.endsWith(postfix) ? string : string.substr(0, string.length - postfix.length)
