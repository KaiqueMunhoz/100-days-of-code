function double(number){
    if(typeof number !== 'number'){
        throw new Error(`Value expected: number, value received: ${typeof number}`)
    }
    return number * 2;
}