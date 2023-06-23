let cooldownDuration = 3000;

const getActionKey = (action, url, params, options) => {
    options = options || {}
    params = params || {}
    const key_params = Object.keys(params).sort().map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
    const key_options = Object.keys(options).sort().map(key => `${key}=${encodeURIComponent(options[key])}`).join('&')
    return `${action}_${url}?${key_params}&${key_options}`
}
const buffer = {
    // actionKey: {
    //    requestPromise: axios request Promise,
    //    cooldownTimer,
    // }
}

function makeRequest(action, url, params, options, key) {

    buffer[key] = buffer[key] || {}
    const buffered = buffer[key]
    buffered.requestPromise = action(url, params, options)
    startCooldownTimer(buffered)

    return buffer[key].requestPromise;
}
function startCooldownTimer(buffered) {
    clearTimeout(buffered.cooldownTimer);
    buffered.cooldownTimer = setTimeout(() => {
        buffered.cooldownTimer = null;
    }, cooldownDuration);
}

export const throttleBufferedAction = ({
                                           action,
                                           url,
                                           params={},
                                           options={}
                                       },
                                       bufferTime=cooldownDuration
) => {
    bufferTime = bufferTime || 3000
    cooldownDuration = bufferTime

    const key = getActionKey(action, url, params, options)
    buffer[key] = buffer[key] || {}
    const buffered = buffer[key]

    if (!buffered?.requestPromise || !buffered.cooldownTimer) return makeRequest(action, url, params, options, key);
    else return buffered.requestPromise;
}
