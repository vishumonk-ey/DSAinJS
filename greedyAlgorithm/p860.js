// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.+

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const map = new Map()
    for(let i = 0 ; i < bills.length ; i++){
        const returnVal = bills[i] - 5
        if ( returnVal == 15){
            if(map.get(10) >= 1 &&  map.get(5)>=1){
                map.set(10 , map.get(10) - 1)
                map.set(5 , map.get(5) - 1)
            }else if(map.get(5) >= 3){
                map.set(5 , map.get(5) - 3)
            }else{
                return false
            }
        }else if(returnVal == 10){
            if(map.get(10) >= 1){
                map.set(10 , map.get(10) - 1)
            }else if(map.get(5) >= 2){
                map.set(5 , map.get(5) - 2)
            }else{
                return false
            }
        }else if(returnVal == 5 ){
            if(map.get(5) >= 1){
                map.set(5 , map.get(5)-1)
            }else{
                return false
            }
        }
        map.set(bills[i] , (map.get(bills[i]) || 0) + 1)
    }
    return true
};