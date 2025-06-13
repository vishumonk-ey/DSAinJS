
class Solution {
    /**
    * @param number[] stations
    * @param number k

    * @returns float
    */
    findSmallestMaxDist(stations, k) {
        // code here
        // let howManyPlaced = new Array(stations.length-1).fill(0)
        // for(let i = 0 ; i < k ; i++){
        //     let maxSecLength = -1 
        //     let maxSecIndex = -1 
        //     for(let j = 0 ; j < stations.length - 1 ; j++){
        //         const diff = stations[j+1] - stations[j]
        //         const secnLength = diff / (howManyPlaced[j] + 1)
        //         if(secnLength > maxSecLength){
        //             maxSecLength = secnLength
        //             maxSecIndex = j
        //         }
        //     }
        //     howManyPlaced[maxSecIndex]++
        // }
        // let maxDis = -1
        // for(let i = 0 ; i < stations.length - 1 ; i++ ){
        //     const diff = stations[i+1] - stations[i]
        //     const secnLength = diff / (howManyPlaced[i] + 1)
        //     maxDis = Math.max(maxDis , secnLength)
        // }
        // return maxDis
        
        
        // ------------ Binary Search -------------------
        let left = 0
        let right = 0
        let result
        for(let i = 0 ; i <stations.length-1 ; i++){
            right=Math.max(right , stations[i+1] - stations[i])
        }
        while(right - left > 1e-6){
            const mid = (left+right)/2
            const stationsReq = this.findStations(stations,mid)
            if(stationsReq > k){
                left = mid
            }else{
                result = mid
                right = mid
            }
        }
        return result
    }
    findStations(arr,maxDis){
        let stationCount = 0
        for (let i = 0 ; i < arr.length - 1 ; i++){
            const diff = arr[i+1] - arr[i]
            if(diff > maxDis){
                const reqd = Math.ceil((diff / maxDis) - 1)
                stationCount+=reqd
            }
        }
        return stationCount
    }
}
