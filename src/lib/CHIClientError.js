module.exports = class CHIClientError extends Error {
  constructor(name, payload = {}) {
    super(payload?.message ?? name ?? 'CHIClientError')
    Object.keys(payload)
        .filter(key => key !== 'err')
        .forEach(key => {this[key] = payload[key]})
    this.message = this.message || ''
    this.name = name || ''
    if (payload.err) {
      this.message += ' ' + (payload.err?.message)
      if (payload.err.name) this.name = `${ name }__${ payload.err?.name.replace(/[.-]/g, '__') }`
    }
    this.stack = payload?.err?.stack || this.stack
  }
}
