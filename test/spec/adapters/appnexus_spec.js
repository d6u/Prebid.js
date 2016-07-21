import { expect } from 'chai';
import adapter from 'src/adapters/appnexusUt';

describe('AppNexusAdapter', () => {

  it('exists and is a function', () => {
    expect(adapter).to.exist.and.to.be.a('function');
  });

});
