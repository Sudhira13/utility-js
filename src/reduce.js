let result = []
let listLength = 0
let length = 1;
function calculate(list,func,value,initialVal){
    if(listLength==0){
        return initialVal ? initialVal : undefined
    }
    if(length == listLength){
        return value
    }
    result.push(func(value,list[length]))
    value = result.pop()
    length = length+1
    return calculate(list,func,value,initialVal)
}
const reduce = (list,func,initialVal) => {
    let value
    listLength = list.length
    if (initialVal == null){
        value = ''
    }
    else{
        value = initialVal
        length = 0
    }
    let output = calculate(list,func,value,initialVal);
    return output
}

module.exports = reduce;