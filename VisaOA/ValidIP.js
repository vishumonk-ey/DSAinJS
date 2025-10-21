// /**
//  * @param {string} queryIP
//  * @return {string}
//  */
// var validIPAddress = function (queryIP) {
//   let result = "IPv4";
//   // checking for ipv4
//   let arr = queryIP.split(".");
//   if (arr.length == 4) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length == 0) {
//         result = "IPv6";
//         break;
//       }
//       const number = Number(arr[i]);
//       if (!Number.isNaN(number) && number >= 0 && number <= 255) {
//         continue;
//       } else {
//         result = "IPv6";
//         break;
//       }
//     }
//   } else {
//     result = "IPv6";
//   }
//   // checking for ipv6
//   if (result === "IPv6") {
//     arr = queryIP.split(":");
//     if (arr.length === 8) {
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 4 || arr[i].length == 0) {
//           result = "Neither";
//           break;
//         } else {
//           for (let j = 0; j < arr[i].length; j++) {
//             const asciiVal = arr[i].charCodeAt(j);
//             if (
//               (asciiVal >= 48 && asciiVal <= 57) ||
//               (asciiVal >= 65 && asciiVal <= 90) ||
//               (asciiVal >= 97 && asciiVal <= 122)
//             ) {
//               continue;
//             } else {
//               result = "Neither";
//               return result;
//             }
//           }
//         }
//       }
//     } else {
//       result = "Neither";
//     }
//   } else {
//     return result;
//   }
//   return result;
// };
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
    let result = "IPv4";
    // checking for ipv4
    const regexIPv4 = /^(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
    let arr = queryIP.split('.')
    if(arr.length === 4){
        for (let i = 0 ; i < arr.length ; i++){
            if(!regexIPv4.test(arr[i])){
                result = 'IPv6'
                break
            }
        }
    }else{
        result ='IPv6'
    }
    // checking for ipv6
    
    if (result === "IPv6") {
      arr = queryIP.split(":");
      if (arr.length === 8) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > 4 || arr[i].length == 0) {
            result = "Neither";
            break;
          } else {
            for (let j = 0; j < arr[i].length; j++) {
              const asciiVal = arr[i].charCodeAt(j);
              if (
                (asciiVal >= 48 && asciiVal <= 57) ||
                (asciiVal >= 65 && asciiVal <= 90) ||
                (asciiVal >= 97 && asciiVal <= 122)
              ) {
                continue;
              } else {
                result = "Neither";
                return result;
              }
            }
          }
        }
      } else {
        result = "Neither";
      }
    } else {
      return result;
    }
    return result;
  };


//   ################### Regex Theory ###################3
//  /^[0-9]$/ - single dig from 0-9