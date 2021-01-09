const tail = require('./tail')

describe('Tail',()=>{

    it('Return elements of a list except the first',()=>{
        let list = [43,23,45,67,87]
        expect(tail(list)).toEqual([23,45,67,87])
    })
    it('Return empty list if list is empty',()=>{
        let list = []
        expect(tail(list)).toEqual([])
    })
})