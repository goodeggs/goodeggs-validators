import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
var {expect} = chai;

import {email} from './index';

describe('email', ()=>{
  it('accepts basic address', () => {
    expect(email('bob@example.com')).to.be.true();
  });
  it('accepts address with mixed case', () => {
    expect(email('BoB@example.com')).to.be.true();
  });
  it('accepts username with UTF8 characters', () => {
    expect(email('b☃b@example.com')).to.be.true();
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
});
