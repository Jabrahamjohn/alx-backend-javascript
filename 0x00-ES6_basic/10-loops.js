export default function appendToEachArrayValue(array, appendString) {
  let counter = 0;
  const copyArray = array;
  for (const idx of array) {
    copyArray[counter] = appendString + idx;
    counter += 1;
  }

  return copyArray;
}
