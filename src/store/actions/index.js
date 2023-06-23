import assetActions from './assetActions'
// import assetMemberActions from './assetMemberActions'
// import appUserActions from './appUserActions'
// import accountActions from './accountActions'

const actions = {}

const addAction = (name, action) => {
    if (actions[name]) throw new Error(`action ${name} already exists`)
    actions[name] = action
}

for (const name in assetActions) { addAction(name, assetActions[name]) }
// for (const name in assetMemberActions) { addAction(name, assetMemberActions[name]) }
// for (const name in appUserActions) { addAction(name, appUserActions[name]) }
// for (const name in accountActions) { addAction(name, accountActions[name]) }

export default actions