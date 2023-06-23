import {isObject} from "./typeHelpers/getVariableType";

export class ActionError extends Error {
  constructor(message, payload = {}) {
    super(message)
    if (isObject(payload)) Object.keys(payload)
        .filter(key => key !== 'err')
        .forEach(key => {this[key] = payload?.[key]})

    this.code = payload?.code || 500
    this.name = this?.name || 'ActionError'
    this.message = this.message || message
    if (payload?.err) {
      if (payload.err?.message) this.message += ' ' + payload.err?.message
      if (payload.err?.name) this.name += `__${ payload.err?.name?.replace(/[.-]/g, '__') }`
    }
  }
}
