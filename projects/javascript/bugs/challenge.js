//If the param is odd, the code throw an error.

let myObj = {

    _a : 0,

    get a() {
        return this._a;
    },
    set a(param){
        if(param % 2 !== 0){
            throw new Error();
        }
        this._a = param;
    }
}

