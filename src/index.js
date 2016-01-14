
export const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function email(str) {
  return EMAIL_REGEX.test(str);
}

