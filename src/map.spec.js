const map = require('./map');

describe('Map', () => {

    it('Return empty list if list is empty', () => {
        expect(map([], x => x**3)).toEqual([])
    });
    it('Cube of [1,2,3] is [1,8,27]', () => {
        expect(map([1,2,3], x => x**3)).toEqual([1,8,27])
    });   
    it('Identity of [1,2,3] is [1,2,3]', () => {
        expect(map([1,2,3], x => x)).toEqual([1,2,3])
    });  
})