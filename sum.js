function sum(...args){
    let delimiter = "\n";
    if (args[0].startsWith("//")) {
        const delimiterEnd = args[0].indexOf("\n");
        delimiter = args[0].substring(2, delimiterEnd);
        args[0] = args[0].substring(delimiterEnd + 1);
    }
    const cleanedArray = args.map(el => el.split(delimiter)).flat();
    return cleanedArray.reduce((acc, curr) => acc + Number(curr.trim()), 0);
    // const cleanedArray = args.map(el=>el?.split("\n")).flat()
    // return cleanedArray.reduce((acc, curr) => acc + +(curr), 0);
}
console.log(sum( "//;\n1;2"))
module.exports = sum