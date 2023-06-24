import { sha256 } from 'js-sha256'

export const usePassphrase = () => {
  const hashPassphrase = passphrase => sha256(passphrase + '6a46f4ae-f24e-49e2-8eab-0b9214836b10')
  return {
    hashPassphrase,
  }
}
