// algorithm-->set of steps to accomplish a certain task.
/* PROBLEM SOLVING APPROACH-:
A) UNDERSTAND THE PROBLEM--:
   a. can i restate the problem in my own words?
   b. what are the inputs that go in the problem?
   c. what are the outputs that should come from the problem
   d. do i have enough info to determine outputs from the input.
   e. how should i label the imp peices of data from problem

B) EXPLORE THE CONCRETE EXAMPLES-:
   a. start with simple examples.
   b. progress to more complex examples.
   c. explore examples with invalid input.
   d. explore examples with empty inputs.

C) BREAK IT DOWN-:
  a. explicitly write the steps that you need to take.A

D) SOLVE IT-:
  a. if you are facing difficulty or stuck at some point 
  b. ignore the difficulty for a sec and write the simplified soln.
  c. incorporate back the difficulty. */

function charCount(str) {
  // convert the str in lower case.
  // make an object to return at last
  // loop the entire string
  // if the char is alphanumeric and prsnt in object then get the value and ++ it
  // if the char is alphanumeric and not prsnt in object then add it and give it the value 1
  //if the char isnt aphanumric then do nothing

  // return the string.

  const strInLowerCase = str.toLowerCase();
  let result = {};
//   const regex = /^[a-zA-Z0-9]$/;
  for (let i = 0; i < str.length; i++) {
    const char=strInLowerCase[i]
    let isAlphaNumeric=alphanumeric(char)
    if (isAlphaNumeric
       &&
      result.hasOwnProperty(char)
    ) {
      result[char]++;
    } else if (
        isAlphaNumeric &&
      !result.hasOwnProperty(char)
    ) {
      result[char]= 1;
    }
  }
  return result;
}

console.log(charCount("Vishal Is bootiful :)"))

// regex is generally slower and to check if the string is alphanumeric or not we can do thiss-:
function alphanumeric(char) {
  if (
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
  ) {
    return true;
  } else {
    return false;
  }
}
