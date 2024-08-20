// recursion-->a process calling itself and after each call it is moving towards base condition.
// remember to -:
//  a) include base case correctly
//  b) return the correct thing
// stack overflow

// HELPER METHOD RECURSION--:
        // ek outer function hota hai jo ki non recursive hota hai aur ek inner function hota hai jo ki recursive hota hai
        // can be done without any use of helper also

    //Q--->COLLECTING ALL ODD VALUES FROM AN INPUT ARRAY-;


    function collectingOddValues(arr){
        let result=[]
        // baaar baar outer function ko call nhi kiya kyuki vo baar baar result ko empty array krdeta--- can also be solved if we just declare result outside.
        // redeclaration Issuue??

        function helperMethod(helperInput){
            if(helperInput.length==0) return;
            if(helperInput[0] % 2 != 0) {
                result.push(helperInput[0])
            }

            let newInput=helperInput.slice(1)
            helperMethod(newInput)
        }
        helperMethod(arr)
        return result
    }


        // another approachh without using helper method and pure recursive way-:\
function collectingOddValuesRecursive(arr){
    let newArr=[]
    if (arr.length==0) return newArr
    if (arr[0] % 2 !=0){
        newArr.push(arr[0])
    }
    newArr=[...newArr,...collectingOddValuesRecursive(arr.slice(1))]
    return newArr
}
// har baari naya array create horha hai but koi dikkat nhi hai vapas se declare krte jao
console.log(collectingOddValuesRecursive([1,2,3,4,5,6]))

