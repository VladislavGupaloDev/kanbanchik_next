export const BASE_PATH = ''
export const AUTH_PATH = `${BASE_PATH}/account`
export const PROTECTED_PATH = `${BASE_PATH}/i`
export const USER_PATH = `${BASE_PATH}/user`
export const PROFILE_PATH = `${PROTECTED_PATH}/profile`
export const ROUTES = {
  PUBLIC: {
    HOME: `${BASE_PATH}/`,
    LOGIN: `${AUTH_PATH}/login`,
    REGISTER: `${AUTH_PATH}/register`,
    PASSWORD_RECOVERY: `${AUTH_PATH}/password-recovery`
  },
  PRIVATE: {
    HOME: `${PROTECTED_PATH}/`,
    DASHBOARD: `${PROTECTED_PATH}/dashboard`,
    PROFILE: `${PROFILE_PATH}`,
    SETTINGS: `${PROTECTED_PATH}/settings`,
    PROFILE_SETTINGS: `${PROTECTED_PATH}/settings/profile`,
    PRIVACY_SETTINGS: `${PROTECTED_PATH}/settings/privacy`
  },
  isPublic: (path: string) => {
    Object.values(ROUTES.PUBLIC).includes(path)
  },
  isPrivate: (path: string) => {
    Object.values(ROUTES.PRIVATE).includes(path)
  }
}
