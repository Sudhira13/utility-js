
let listLength = 0
let maximum = 0
function calculateMaximum(list){
  if(listLength==0){
      return maximum
  }
  if(maximum < list[listLength-1]){
      maximum = list[listLength-1]
  }
  listLength = listLength - 1
  return calculateMaximum(list)
}


const max = (list) => {
   listLength = list.length
   maximum = list[0]
   let result = calculateMaximum(list)
   return result
}

module.exports = max;