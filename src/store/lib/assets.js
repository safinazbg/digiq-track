import {capitalize} from "vue";
import {isArray} from "@/lib/getVariableType_useTypeHelperOne.js";

const initType = (state, dataType) => state.assets[dataType] = state.assets[dataType] || {}
const eraseAttributes = obj => Object.keys(obj).forEach(key => delete obj[key])
const pullChanges = (target, item, index) => {
  const id = item.id || index
  const existingAsset = target[id]
  if (existingAsset) {
    if (item.token === 'delete') return delete target[id]
    else eraseAttributes(existingAsset)
  }
  else target[id] = {}

  Object.assign(target[id], item)
}

const prepareTarget = (target, reset) => {
  if (reset) eraseAttributes(target)
}

const pullAssetChanges = (target, items, dataType, reset) => {
  if (dataType) items
      .forEach(item => item.dataType = dataType)
  prepareTarget(target, reset)

  items.forEach((item, index) => pullChanges(target, item, index))
}

export const isStatusVariable = key => key.startsWith('_')
export const useDataType = (state, dataType) => {
  dataType = capitalize(dataType)
  initType(state, dataType)

  const target = state.assets[dataType]

  const pullAssets = items => {
    if (isArray(items)) pullAssetChanges(target, items, dataType)
  }

  return {
    pullAssets
  }
}
