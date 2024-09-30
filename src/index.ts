export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const OBJECTID_REGEX = /^[0-9a-f]{24}$/;

export function email(str: string): boolean {
  return EMAIL_REGEX.test(str);
}

export function objectid(str: string): boolean {
  return OBJECTID_REGEX.test(str);
}
