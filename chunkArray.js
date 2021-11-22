/* 
//  Given two or more arrays, write a function that combines
//  their elements into one array without any repetition. 
//  E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
given an array and a number, chunk that array down to smaller arrays of size = number
*/

function chunkArray(array, size) {
  let chunked = [];
  let chunker = [];
  let chunkist = [];
  while (array.length > size) {
    if (array.length > size) {
      chunked.push(array.splice(0, size));
    }
  }
  chunkist = array;
  console.log(chunkist);
  chunked.push(chunkist);
  return chunked;
}

module.exports = chunkArray;

