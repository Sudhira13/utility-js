
let listLength = 0
let minimum = 0
function calculateMinimum(list){
  if(listLength==0){
      return minimum
  }
  if(minimum > list[listLength-1]){
      minimum = list[listLength-1]
  }
  listLength = listLength - 1
  return calculateMinimum(list)
}


const min = (list) => {
   listLength = list.length
   minimum = list[0]
   let result = calculateMinimum(list)
   return result
}

module.exports = min;