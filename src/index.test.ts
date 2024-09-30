import {email, objectid} from '.';

describe('validators', () => {
  describe('email', () => {
    it('accepts basic address', () => {
      expect(email('bob@example.com')).toBe(true);
    });

    it('accepts address with mixed case', () => {
      expect(email('BoB@example.com')).toBe(true);
    });

    it('accepts username multi-level domaim', () => {
      expect(email('bob@mail.example.com')).toBe(true);
    });

    it('rejects username with UTF8 characters', () => {
      expect(email('b☃b@example.com')).toBe(false);
    });

    it('rejects without a username', () => {
      expect(email('@example.com')).toBe(false);
    });

    it('rejects whitespace', () => {
      expect(email('bob@exam ple.com')).toBe(false);
    });

    it('rejects without an FQDN', () => {
      expect(email('bob@example')).toBe(false);
    });

    it('rejects with >1 @ sign', () => {
      expect(email('bob@foo@example.com')).toBe(false);
    });

    it('rejects with a period at the end', () => {
      expect(email('bob@example.com.')).toBe(false);
    });

    it('accepts numeric username', () => {
      expect(email('12345@example.com')).toBe(true);
    });

    it('accepts domain with hyphen', () => {
      expect(email('bob@sub-domain.example.com')).toBe(true);
    });

    it('rejects with missing domain', () => {
      expect(email('bob@.com')).toBe(false);
    });

    it('rejects domain with special characters', () => {
      expect(email('bob@exa!mple.com')).toBe(false);
    });

    it('accepts domain with numeric characters', () => {
      expect(email('bob@123example.com')).toBe(true);
    });

    it('rejects TLD with less than 2 characters', () => {
      expect(email('bob@example.c')).toBe(false);
    });
  });

  describe('objectid', () => {
    it('accepts a properly-formatted objectid', () => {
      expect(objectid('564cbb6219299f8100000008')).toBe(true);
    });

    it('rejects with invalid hexadecimal', () => {
      expect(objectid('qa6-19299f81080008327r')).toBe(false);
    });

    it('rejects with not enough bits', () => {
      expect(objectid('8a6219299f810800083271')).toBe(false);
    });
  });
});
