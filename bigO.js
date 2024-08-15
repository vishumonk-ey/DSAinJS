// bigO--> for comparing the efficiency of codes.
function addUpto(n){
    let total=0
    for(let i =1;i<=n;i++){
        total+=i
    }
    return total
}
const t1=Date.now()
addUpto(100000000)
const t2=Date.now()
console.log(`time->${t2-t1}`);
// ...better... code in what sense
// timing->
//    different machine will take diff. time for the same code.
//    same machine might also take diff. time for the same code.
//    for faster algo., itna fast hota hai ki we cant measure the time difference

// O(1)-> as the n increases the runtime is almost always const.(bhot halka halka sa fluctuation tha bass)
// O(n)-> as the input increases the runtime is also increased linearly
// O(n^2)-> as the input increases the runtime is increased quadraticallyy
// BIG O BASICALLY REPRESENTS THE RELATIONSHIP BETWEEN INPUT AND THE RUNTIME.
// do ya do se jyaada O(n) upar niche de rkhe hain to overall O(n) hi ayega but if there is case of nesting then exponential
//  BIG O SHORTHANDS----:
//  1) arithmetic op are constant.
//  2) variable assignment is also constant.
//  3) accessing a element in an array or in object is also const.
//  4) In a loop,complexity of the loop is length of loop times the complexity of whatever happening inside.

// Big O takes reference of number of operations which the computer had to do in an algo. thus it doesnt depends upon hardware of comp