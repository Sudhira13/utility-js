const tail = (list)=>{
    if(!list){
        return [];
    }
    else{
        let result = list.shift()
        return list
    }
}

module.exports = tail;