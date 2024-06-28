function sum(...args) {
  const cleanedArray = arrayClean(args);
  const negativeNumbers = cleanedArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    return Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  return cleanedArray.reduce((sum, curr) => sum + +curr, 0);
}
const arrayClean = (args) => {
  let delimiter = "\n";
  if (args[0].startsWith("//")) {
    const lastIndex = args[0].indexOf("\n");
    delimiter = args[0].substring(2, lastIndex);
    args[0] = args[0].substring(lastIndex + 1);
  }
  const cleanedArray = args.map((el) => el.split(delimiter)).flat();
  return cleanedArray;
};

module.exports = sum;
