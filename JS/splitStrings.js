/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

function solution(str) {
  let strsolution = [];
  for (let i = 1; i <= str.length; i += 2) {
    if (str[i] == undefined) {
      strsolution.push(str[i - 1] + "_");
    } else {
      strsolution.push(str[i - 1] + str[i]);
    }
  }
  return strsolution;
}

console.log(solution("Hello"));
