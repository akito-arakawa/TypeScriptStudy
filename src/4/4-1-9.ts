const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper === true) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper("Hello World")); 
console.log(toLowerOrUpper("Hello World", true));
console.log(toLowerOrUpper("Hello World", false));