const head = require('./head');

describe('Head', () => {

    it('First element in Head', () => {
        let list = [23,45,67,32]
        expect(head(list)).toEqual(23);
    });
    it('Return undefined for empty list', () => {
        let list = []
        expect(head(list)).toEqual(undefined);
    });
})