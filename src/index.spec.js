import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
var {expect} = chai;

import {email, objectid} from './index';

describe('email', () => {
  it('accepts basic address', () => {
    expect(email('bob@example.com')).to.be.true();
  });
  it('accepts address with mixed case', () => {
    expect(email('BoB@example.com')).to.be.true();
  });
  it('accepts username with UTF8 characters', () => {
    expect(email('b☃b@example.com')).to.be.true();
  });
  it('accepts username multi-level domaim', () => {
    expect(email('bob@mail.example.com')).to.be.true();
  });
  it('rejects without a username', () => {
    expect(email('@example.com')).to.be.false();
  });
  it('rejects whitespace', () => {
    expect(email('bob@exam ple.com')).to.be.false();
  });
  it('rejects without an FQDN', () => {
    expect(email('bob@example')).to.be.false();
  });
  it('rejects with >1 @ sign', () => {
    expect(email('bob@foo@example.com')).to.be.false();
  });
  it('rejects with a period at the end', () => {
    expect(email('bob@example.com.')).to.be.false();
  });
});

describe('objectid', () => {
  it('accepts a properly-formatted objectid', () => {
    expect(objectid('564cbb6219299f8100000008')).to.be.true();
  });

  it('rejects with invalid hexadecimal', () => {
    expect(objectid('qa6-19299f81080008327r')).to.be.false();
  });

  it('rejects with not enough bits', () => {
    expect(objectid('8a6219299f810800083271')).to.be.false();
  });
});
