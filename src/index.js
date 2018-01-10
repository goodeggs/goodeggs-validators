export const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@^.\s]+$/;

export function email (str) {
  return EMAIL_REGEX.test(str);
}

export const OBJECTID_REGEX = /^[0-9a-f]{24}$/;

export function objectid (str) {
  return OBJECTID_REGEX.test(str);
}
