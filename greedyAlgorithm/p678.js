// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let min = 0
  let max = 0
  for(let i = 0 ; i < s.length ; i++ ){
    if (s[i] == "("){
      min++
      max++
    }else if ( s[i] == ")"){
      min--
      if(min < 0){
        min = 0
      }
      max--
      if ( max < 0) return false
    }else{
      min-- 
      if (min < 0){
        min = 0
      }
      max++
    }

  }
  return (min == 0)
};
// function checkString(s, cnt = 0, i = 0) {
//   while (i < s.length) {
//     if (s[i] == "(") {
//       cnt++;
//     } else if (s[i] == ")") {
//       cnt--;
//     } else {
//       const isLP = checkString(s, cnt + 1, i + 1);
//       if (isLP) return true;
//       const isRP = checkString(s, cnt - 1, i + 1);
//       if (isRP) return true;
//       const isEM = checkString(s, cnt, i + 1);
//       if (isEM) return true;
//     }
//     if(cnt < 0)return false
//     i++
//   }
//   if(cnt == 0)return true
//   return false
// }

// console.log(checkValidString("((*)(*)"))