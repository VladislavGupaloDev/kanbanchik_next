const BASE_PATH = ''
const AUTH_PATH = `${BASE_PATH}/auth`
const PROTECTED_PATH = `${BASE_PATH}/i`
const PROFILE_PATH = `${PROTECTED_PATH}/profile`
export const ROUTES = {
  PUBLIC: {
    HOME: `${BASE_PATH}/`,
    LOGIN: `${AUTH_PATH}/login`,
    REGISTER: `${AUTH_PATH}/register`,
  },
  PRIVATE: {
    HOME: `${PROTECTED_PATH}/`,
    DASHBOARD: `${PROTECTED_PATH}/dashboard`,
    PROFILE: `${PROFILE_PATH}`,
    PROFILE_SETTINGS: `${PROFILE_PATH}/settings/`,
  },
  isPublic: (path: string) => {
    Object.values(ROUTES.PUBLIC).includes(path)
  },
  isPrivate: (path: string) => {
    Object.values(ROUTES.PRIVATE).includes(path)
  }
}



