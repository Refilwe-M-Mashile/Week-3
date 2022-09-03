const library = {
  a: "w",
  b: "x",
  c: "y",
  d: "z",
  e: "a",
  f: "b",
  g: "c",
  h: "d",
  i: "e",
  j: "f",
  k: "g",
  l: "h",
  m: "i",
  n: "j",
  o: "k",
  p: "l",
  q: "m",
  r: "n",
  s: "o",
  t: "p",
  u: "q",
  v: "r",
  w: "s",
  x: "t",
  y: "u",
  z: "v",
  " ": "_",
};

/*
Problem Statement:
 decipher the text
 NB! ^ means the letter should be capital letter
*/

/*
1. loop through string
-> if Letter || space:
    -> check if char is uppercase:
      -> add "^"+library's equivalent to res
    -> if char is lowercase 
    -> add library's equivalent to res
else:
    add char
*/

// str = 'abc' -> wxy
const cipher = (str) => {
  let res = "";
  for (const c of str) {
    res +=
      c.toUpperCase() !== c || c === " "
        ? library[c]
        : /[\W_]/.test(c)
        ? c
        : "^" + library[c.toLowerCase()];
  }
  //console.log(res);
  return res;
};
//console.log(cipher('abc'))
const string1 = cipher("I am first");
const string2 = cipher("maybe I do contain caps & some punctuation");
console.assert(string1 === "^e_wi_benop", "Incorrect:1");
console.assert(
  string2 === "iwuxa_^e_zk_ykjpwej_ywlo_&_okia_lqjypqwpekj",
  "Incorrect:2"
);

const decipher = (codedStr) => {
  const result = "";
  //
  //console.log(result);
}; 
