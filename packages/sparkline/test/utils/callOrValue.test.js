import callOrValue from '../../src/utils/callOrValue';

describe('callOrValue', () => {
  it('should return non-functions', () => {
    expect(callOrValue(123)).toEqual(123);
    expect(callOrValue('123')).toEqual('123');
    expect(callOrValue(['hello'])).toEqual(['hello']);
  });

  it('should call a function', () => {
    expect(callOrValue(() => 'abc')).toEqual('abc');
  });

  it('should pass args to functions', () => {
    expect(callOrValue((a, b, c) => `${a}${b}${c}`, 'x', 'y')).toEqual('xyundefined');
  });
});
