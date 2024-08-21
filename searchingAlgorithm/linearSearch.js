// for a given array har ek element ko check kiya and saw whether its the value we want or not
// LINEAR SEARCH---;
let her=['ba','nd','ar','iya','vi','sh','al']
console.log(her.includes('ar'))
// indexOf
// includes
// find
// findIndex
// all these are using linear search behind the scene

function linearSearch(arr,val){
    for(let i =0 ; i<arr.length;i++){
        if(arr[i]===val) return i
    }
    return -1
}
console.log(linearSearch([1,2,3,4,5,6,6],4))

function linearSearchTwo(arr,val){
    let foundIndex=-1
    arr.forEach(function(elmnt,index){
        if(elmnt===val) {
            foundIndex=index
            // return
        }
            // for each will keep running for all the elements return krne se bass callback se bahar ayegaa
    })
    return foundIndex
}
console.log(linearSearchTwo([1,2,3,4,5,6,6],4))

// BIG O OF LINEAR SEARCH-> O(N)
