import NABClientError from "./CHIClientError";

export class MissingRequiredParameterError extends NABClientError {
  constructor(location, missingParameterName) {
    super(`${location}__MissingRequiredParameterError`, {
      message: `missing "${missingParameterName}" parameter for calling ${location}`,
      missingParameterName,
      location,
    })
    console.trace()
  }
}
