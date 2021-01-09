const filter = require('./filter');

describe('Filter', () => {

    it('Filter[1,2,3] when the function returns true is [1,2,3]', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3])
    }); 
    it('Filter[] when the function returns true is []', () => {
        expect(filter([], x => true)).toEqual([])
    });
    it('Filter[1,2,3] when the function returns false is []', () => {
        expect(filter([1,2,3], x => false)).toEqual([])
    });
    it('Filter[1,2,3] when the function returns x>1 is [2,3]', () => {
        expect(filter([1,2,3], x => x>1)).toEqual([2,3])
    });
})