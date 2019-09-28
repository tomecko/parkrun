export const validateCode = prefix => code =>
  new RegExp(`${prefix}[0-9]{1,8}`).test(code);
