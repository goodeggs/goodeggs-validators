import { email, objectid } from ".";

describe("email", () => {
  it("accepts basic address", () => {
    expect(email("bob@example.com")).toBe(true);
  });
  it("accepts address with mixed case", () => {
    expect(email("BoB@example.com")).toBe(true);
  });
  it("accepts username with UTF8 characters", () => {
    expect(email("b☃b@example.com")).toBe(true);
  });
  it("accepts username multi-level domaim", () => {
    expect(email("bob@mail.example.com")).toBe(true);
  });
  it("rejects without a username", () => {
    expect(email("@example.com")).toBe(false);
  });
  it("rejects whitespace", () => {
    expect(email("bob@exam ple.com")).toBe(false);
  });
  it("rejects without an FQDN", () => {
    expect(email("bob@example")).toBe(false);
  });
  it("rejects with >1 @ sign", () => {
    expect(email("bob@foo@example.com")).toBe(false);
  });
  it("rejects with a period at the end", () => {
    expect(email("bob@example.com.")).toBe(false);
  });
});

describe("objectid", () => {
  it("accepts a properly-formatted objectid", () => {
    expect(objectid("564cbb6219299f8100000008")).toBe(true);
  });

  it("rejects with invalid hexadecimal", () => {
    expect(objectid("qa6-19299f81080008327r")).toBe(false);
  });

  it("rejects with not enough bits", () => {
    expect(objectid("8a6219299f810800083271")).toBe(false);
  });
});
