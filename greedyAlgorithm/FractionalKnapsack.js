// Given two arrays, val[] and wt[], representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, determine the maximum total value that can be achieved by putting items in the knapsack. You are allowed to break items into fractions if necessary.
// Return the maximum value as a double, rounded to 6 decimal places.

class Solution {
    fractionalknapsack(val, wt, capacity) {
        // code here
        const arr = []
        for(let i = 0 ; i < val.length ; i++){
            arr.push(i)
        }
        arr.sort((a,b) => {
            const ratioA = val[a] / wt[a]
            const ratioB = val[b] / wt[b]
            return ratioB - ratioA
        })
        let cap = capacity 
        let result = 0
        for(let i = 0 ; i < arr.length ; i++){
            if(wt[arr[i]] < cap){
                cap -= wt[arr[i]]
                result += val[arr[i]]
            }else if(wt[arr[i]] == cap){
                result+= val[arr[i]]
                break
            }else{
                result+= (val[arr[i]])/(wt[arr[i]]) * cap
                break
            }
        }
        return result
    }
}