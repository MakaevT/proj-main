function empty(func){
    let res = []
    for(let i = 0; i < func.length; i++){
        func[i] += res
        res.push(func[i])
    }
    return res
}

export default empty