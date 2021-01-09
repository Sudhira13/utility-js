const min = require('./min')

describe('Minimum',()=>{

    it('Minimum of [1,2,3,4] is 1',()=>{
        let list = [1,2,3,4]
        expect(min(list)).toEqual(1)
    })
})