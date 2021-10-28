export const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@^.\s]+$/;
export const OBJECTID_REGEX = /^[0-9a-f]{24}$/;

export function email(str: string): boolean {
  return EMAIL_REGEX.test(str);
}

export function objectid(str: string): boolean {
  return OBJECTID_REGEX.test(str);
}
