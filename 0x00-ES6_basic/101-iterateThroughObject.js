export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const [i, name] of reportWithIterator.entries()) {
    if (i === 0) {
      string += name;
    } else {
      string = `${string} | ${name}`;
    }
  }
  return string;
}
