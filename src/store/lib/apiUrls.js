import config from "../../../config.mjs";

const {appPort, apiPath, basePath, useJSONDataStore} = config

export const getBaseUrl = () => {
  const {origin, host, hostname} = location
  let backendHost = hostname
  const inProduction = !['127.0.0.1', 'localhost'].includes(hostname)
  if (inProduction) backendHost += basePath
  else if (appPort) backendHost += ':' + appPort
  return origin.replace(host, backendHost)
}
export const getApiUrl = () => `${getBaseUrl()}${apiPath}`
export const getAssetsUrl = ({dataType}) => {
  if (!dataType) throw 'dataType is required'
  if (dataType === 'UserAccount') throw 'use dedicated generator for UserAccount urls'
  return `${getApiUrl()}/${dataType}${useJSONDataStore ? '/json' : ''}`
}
export const getAssetUrl = ({dataType, postfix}) => {
  if (!dataType) throw 'dataType is required'
  if (dataType === 'UserAccount') throw 'use dedicated generator for UserAccount urls'
  if (!postfix) throw 'postfix is required (typically asset repoId)'
  return `${getAssetsUrl({dataType})}/${postfix}`
}
export const getAssetActionUrl = ({dataType, postfix, actionName}) => {
  if (!dataType) throw 'dataType is required'
  if (dataType === 'UserAccount') throw 'use dedicated generator for UserAccount urls'
  if (!postfix) throw 'postfix is required (typically asset repoId)'
  if (!actionName) throw 'actionName is required'
  return `${getAssetsUrl({dataType})}/${postfix}/${actionName}`
}

export const getUserAccountsUrl = () =>
    `${getApiUrl()}/account`
export const getUserAccountUrl = handle => {
  if (!handle) throw 'handle is required'
  return `${getUserAccountsUrl()}/${handle}`
}
export const getUserAccountActionUrl = (repoId, actionName) => {
  if (!repoId) throw 'repoId is required'
  if (!actionName) throw 'actionName is required'
  return `${getUserAccountUrl(repoId)}/${actionName}`
}
export const getUserAccountConfirmationUrl = (actionName, token) => {
  if (!token) throw 'token is required'
  if (!actionName) throw 'actionName is required'
  return `${getUserAccountUrl('confirm')}/${actionName}/${token}`
}

export const getAssetUserActionUrl = (dataType, repoId, actionName) => `${getUserAccountUrl(dataType)}/${repoId}/${actionName}`

