const inProduction = process.env?.NODE_ENV !== 'development'
const USING_TLS = inProduction
const PROTOCOL = USING_TLS ? 'https:' : 'http:'

const settings = {

  apiPath: '/api/v1',
  appId: 'digiq_t', // todo: remove references
  basePath: '',
  protocol: PROTOCOL,

  useJSONDataStore: false,

  permissionThresholds: {
    'readAsset': 1,
    'maintainAsset': 2,
    'developAsset': 3,
    'manageAsset': 5,
    'readDataType': 41,
    'maintainDataType': 42,
    'developDataType': 43,
    'manageDataType': 45,
    'readApp': 71,
    'maintainApp': 72,
    'developApp': 73,
    'manageApp': 75,
    'devOp': 100,
  },
  roleNames: {
    maintainAsset: 'Asset Editor',
    developAsset: 'Asset Developer',
    manageAsset: 'Asset Manager',
    readApp: 'Member',
    manageApp: 'Manager',
    devOp: 'Developer'
  },
  inProduction,
  USING_TLS,
}
export default settings
