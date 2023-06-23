import Axios from "axios";
import {ActionError} from "../lib/ActionError";
import {MissingRequiredParameterError} from "../lib/MissingRequiredParameterError.js";
import {getBaseUrl} from "@/store/lib/apiUrls";
import {isObject} from "@/lib/typeHelpers/getVariableType.js";

Axios.defaults.withCredentials = true // redundant

const axios = Axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {'X-Requested-With': 'XmlHttpRequest'},
})

/*
    REQUEST
 */
const markRequestSentTime = config => {
  config.metadata = {sentAt: Date.now()}
  return config
}

axios.interceptors.request.use(config => {
  markRequestSentTime(config)
  return config
}, function (error) {
  return Promise.reject(error)
})

/*
    RESPONSE
 */

const hydrateErrorResponse = response => {
  if (response.status === 401) response.Error = new InsufficientPrivilegesError()
  else if(response.status === 403) response.Error = new InsufficientPrivilegesError()
  else if (response.status === 404) response.Error = new ActionError(`This asset action was not found.`)
  else if (response.status === 500) response.Error = new ActionError(`There was an error processing this request.`)
  else if (response.status === 503) response.Error = new ActionError(`The server is currently unavailable.`)
  // todo: catch undefined dataType on GET/POST jsonAsset list response
  return response
}
const handleAuthErrorResponse = response => {
  hydrateErrorResponse(response)
  return response
}

const handleActionErrorResponse = response => {
  const err = response.data.Error
  if (err && err.name?.endsWith('MissingRequiredParamError')) throw new MissingRequiredParameterError('action', err.attributeName)
  return response
}

const normalizeError = response => {
    let err = response.data?.error || response.data?.Error
    if (err && !isObject(err)) err = {
      name: 'Request Error',
      message: err
    }
    response.data.Error = err
    delete response.data.error
  return response
}
axios.interceptors.response.use(handleAuthErrorResponse, error => {
  if (!error.response) throw error
  let response = error.response
  normalizeError(response)
  handleAuthErrorResponse(response)
  handleActionErrorResponse(response)
  return response
})

export default axios

class InsufficientPrivilegesError extends ActionError {
  constructor() {
    super(`This action is not allowed.`)
    this.name = 'Insufficient Privileges'
  }
}
