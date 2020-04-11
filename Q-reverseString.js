// Create a function whic accepts a string and reverse in.;

// Ex -;
// 1) "Rishav" = 'vahsir'

reverseString = string => {
  return string
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
};

console.log(reverseString("rishav"));
