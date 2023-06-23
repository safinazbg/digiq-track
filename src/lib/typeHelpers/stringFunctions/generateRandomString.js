const charsets = {
    alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789',
    hex: 'ABCDEF0123456789',
    numeric: '0123456789',
}
export function generateRandomString(length, charset='hex') {
    let result = ''
    const characters = charsets[charset]
    const charactersLength = characters.length
    length = length ?? 64
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
