const expect = require('expect');

var {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });
  it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('shouold allow string with non-space characters', () => {
    var res = isRealString('  Hi  ');
    expect(res).toBe(true);
  });
});
