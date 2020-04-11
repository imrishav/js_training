// Given a fucntion which take string, check if it got right numbers of brackets.;
// Return Boolean if true else false;

// Ex:
// 1.) "()()()"  returns true;
// 2.) "()(((" returns false

checkforParans = string => {
  return !string.split("").reduce((acc, char) => {
    if (char === "(") {
      return acc + 1;
    }
    if (char === ")") {
      return acc - 1;
    }
  }, 0);
};

console.log(checkforParans("((()))("));
