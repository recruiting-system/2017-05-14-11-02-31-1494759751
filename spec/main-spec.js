const main = require('../main/main');

describe('main()', () => {

    it('should get hello world', () => {
        expect(main()).toBe('hello world');
    });
});