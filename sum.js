function sum(...args){
  const cleanedArray = arrayClean(args)
    return cleanedArray.reduce((sum, curr) => sum + +(curr), 0);
}
const arrayClean =(args)=>{

    let delimiter="\n"
    if (args[0].startsWith("//")) {
        const lastIndex = args[0].indexOf("\n");
        delimiter = args[0].substring(2, lastIndex);
        args[0] = args[0].substring(lastIndex + 1);
    }
    const cleanedArray = args.map(el => el.split(delimiter)).flat();
    return cleanedArray;
}
sum("1","2")
module.exports = sum