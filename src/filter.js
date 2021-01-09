let result = []
let listLength = 0
function calculate(list,func){
    if(!list){
        return []
    }
    if(listLength==0){
        return result
    }
    if(func(list[listLength-1])){
        result.push(list[listLength-1])
    }
    listLength = listLength-1
    return calculate(list,func)
}
const filter = (list, func) => {
    result = []
    listLength = list.length
    let output = calculate(list ,func);
    return output.reverse();
}

module.exports = filter;