const reduce = require('./reduce');

describe('Reduce', () => {

    it('Reduce of [], (x,y)=> x+y is undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined)
    }); 
    it('Reduce of [1,2,3,4,5,6], (x,y)=> x+y is 21', () => {
        expect(reduce([1,2,3,4,5,6],(x,y)=>x+y)).toEqual(21)
    }); 
    // it('Reduce of ["a","b","c"], (x,y)=> x+y is "abc"', () => {
    //     expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc')
    // }); 
})