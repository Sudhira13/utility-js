const max = require('./max')

describe('Max',()=>{

    it('Maximum of [1,2,3,4] is 4',()=>{
        let list = [1,2,3,4]
        expect(max(list)).toEqual(4)
    })
})