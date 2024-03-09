export default function createIteratorObject(report) {
  const values = Object.values(report);
  const arrayThree = [];

  function concat(value) {
    arrayThree.push(value);
  }

  for (const item of values) {
    const array = Object.values(item);
    for (const element of array) {
      element.forEach(concat);
    }
  }

  return (arrayThree);
}
