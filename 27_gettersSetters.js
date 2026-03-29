class A{
    constructor(pass, user){
        this.pass=pass
        this.user=user
    }
    // get pass(){                     //If we have a getter then setter is also mandatory
    //     return this._pass.toUpperCase()
    // }

    // set pass(value){
    //     this._pass=value
    // }
}

const ob= new A("jjj","harsh")
// ob.pass("hhhh")
console.log(ob.get('pass'));
