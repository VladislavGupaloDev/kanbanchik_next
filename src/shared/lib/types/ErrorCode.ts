export enum ErrorCode {
  // Ошибки авторизации
  LOGIN_USERNAME_FAIL = 1101,
  LOGIN_PASS_FAIL = 1102,

  // Ошибки профиля
  PROFILE_NOT_FOUND = 2101,
  PROFILE_UPDATE_FAILED = 2102,

  // Ошибки восстановления пароля
  PASSWORD_EMAIL_NOT_FOUND = 3101,

  // Ошибки верификации
  EMAIL_NOT_VERIFIED = 3201,
  NEED_2FA_CODE = 3202,

  // Ошибки токена
  TOKEN_NOT_VALID = 5101,
  TOKEN_EXPIRED = 5102,
  TOKEN_MISSING = 5103,

  // Ошибки сессий
  SESSION_NOT_FOUND = 4101,
  SESSIONS_NOT_FOUND = 4102,
  SESSION_NO_USER = 4103,
  SESSION_LIMIT_REACHED = 4104,
  SESSION_DEL_CURRENT = 4105,

  // Ошибки деактивации аккаунта
  DEACTIVATE_USER_BAD_CREDENTIALS = 6101,
  DEACTIVATE_ACCOUNT_TOKEN_SUBMITTED = 6102,

  // Ошибки регистрации учётной записи

  REGISTER_EMAIL_EXIST = 7301,
  REGISTER_USERNAME_EXIST = 7302,

  // Ошибки псвязанные взаимодействиями с пользовательской сущностью
  USER_UPDATE_METHOD_PASS = 8101,
  USER_BANNED = 8102
}
