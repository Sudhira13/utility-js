
let result = []
let limit
function calculate(list,func){
    if(!list){
        return []
    }
    if(limit==0){
        return result
    }
    result.push(func(list[limit-1]))
    limit = limit-1
    return calculate(list,func)
}
const map = (list, func) => {
    result = []
    limit = list.length
    let output = calculate(list ,func);
    return output.reverse();
}

module.exports = map;