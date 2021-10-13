export const EMAIL_REGEX: RegExp = /^[^@\s]+@[^@\s]+\.[^@^.\s]+$/;

export function email (str: string): boolean {
  return EMAIL_REGEX.test(str);
}

export const OBJECTID_REGEX: RegExp = /^[0-9a-f]{24}$/;

export function objectid (str: string): boolean {
  return OBJECTID_REGEX.test(str);
}
