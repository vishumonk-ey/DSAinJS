// ds is a collection of data,relationship (order) and the operations which can be performed 
class student{
    constructor(name,age){
        this.name=name
        this.age=age
        this.scores=[]
    }
    // instance methods har ek new instance pe call kar skte hain
    addScore(score){
        this.scores.push(score)
        return this.scores
    }
    giveAverage(){
        let total=this.scores.reduce((accumulator,currValue)=>accumulator+currValue)
        // callback function har ek element pe jaakar run karega , cb function ke alawa we can give initial value . previous element se jo return value arha hai vo acc me store hoojayega and if initial value isnt specified then accumulator me mera arr[0] ajayega and arr[1] se mera iteration chalu hoga and if initial value is given then arr[0] se iteration start hoga! 
        console.log(total / 2);
        
    }
    // class method jo har ek new instance pe call nhi ho skta balki it is called overall on the class like student here

    static names(a,b){
        console.log(`name of first student is ${a.name} and name of second student is ${b.name}`);
        
    }
}
let vishal= new student('vishal',19)
let lipika = new student('lipika',20)
student.names(vishal,lipika)
// vishal.names()-> isnt defined for individual instance
// student.addScore()
