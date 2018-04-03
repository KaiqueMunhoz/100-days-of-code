function double(number){
    if(typeof number !== 'number'){
        throw new Error(`Value expected: number, value received: ${typeof number}`)
    }
    return number * 2;
}

//console.log(double('abc')); //Error
try {
    console.log(double('abc'));
}catch(error){
    console.error(error);
}finally {
    console.log('finish');
}

console.log(double(3)); // 6