let result = []
let listLength = 0
function calculate(list,func,value){
    if(listLength==0){
        return undefined
    }
    if(listLength == 1){
        result.push(func(value,list[listLength-1]))
        return result.pop()
    }
    result.push(func(value,list[listLength-1]))
    value = result.pop()
    listLength = listLength-1
    return calculate(list,func,value)
}
const reduce = (list, func) => {
    result = []
    listLength = list.length
    let value = null
    let output = calculate(list ,func,value);
    return output
}

module.exports = reduce;