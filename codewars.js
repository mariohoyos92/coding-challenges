// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

function firstReverseTry(arr) {
  if (arr.length === 0) return arr;

  let temp;

  temp = arr.pop();
  arr.push(arr[0]);
  arr.splice(0, 1, temp);

  return arr;
}

// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.

// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

function inAscOrder(arr) {
  let inOrder = true;

  arr.forEach((num, i) => {
    if (num >= arr[i + 1]) inOrder = false;
  });

  return inOrder;
}

// Write a function that rearranges an integer into its largest possible value.

function superSize(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
  );
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if (numbers.length === 0) return numbers;

  let smallestIndex = numbers.indexOf(Math.min(...numbers));
  numbers.splice(smallestIndex, 1);

  return numbers;
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .map(letter => {
      if (vowels.indexOf(letter.toLowerCase()) !== -1) {
        return;
      }
      return letter;
    })
    .join("");
}

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}

// Program an algorithm in Javascript (or your selected language, if it is available) that performs exactly 1 complete pass (no more, no less :D) of the Bubblesort algorithm to a list of positive integers. You may assume all arguments provided are arrays containing at least 2 positive integers.

function bubblesortOnce(arr) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str
    .split(" ")
    .map(word => {
      let suffix = `${word[0]}ay`;
      return `${word.slice(1) + suffix}`;
    })
    .join(" ");
}

// // You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//
// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
  return list.filter(
    member => member.continent == "Europe" && member.language == "JavaScript"
  ).length;
}

// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map(num => num ** num)
      .join("")
  );
}

// Task
// Count down 3 times to an positive integer n, return these 3 numbers as a string, separated by exclamation mark(!).
//
// Code Limit
// Less than 30 characters.

countDown = n => n + 2 + `!${n + 1}!` + n;

// // Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

function CaesarCipher(num) {
  this.num = num;
  this.encode = function(str) {
    let upper = str.toUpperCase().split("");
    let enc = upper.map(function(a) {
      if (a.charCodeAt(0) < 65 || a.charCodeAt(0) > 90) {
        return a;
      } else {
        let code = a.charCodeAt(0) + num;
        if (code > 90) {
          return String.fromCharCode(code - 26);
        } else return String.fromCharCode(code);
      }
    });
    return enc.join("");
  };
  this.decode = function(str) {
    let strArr = str.split("");
    let dec = strArr.map(function(a) {
      if (a.charCodeAt(0) < 65 || a.charCodeAt(0) > 90) {
        return a;
      } else {
        let code = a.charCodeAt(0) - num;
        if (code < 65) {
          return String.fromCharCode(code + 26);
        } else return String.fromCharCode(code);
      }
    });
    return dec.join("");
  };
}

// Happy Holidays fellow Code Warriors!
// Santa just finished taking a data structures course, and thought it would be a great idea to build a Binary Christmas Tree! All of Santa's helpers created a Binary Christmas Tree, but not all of them meet his requirements. Can you write some code to validate the Binary Christmas Trees?

// Valid Binary Christmas Tree
// Write a function isValidTree that accepts a Binary Tree, and returns true if it meets Santa's requirements, false otherwise. Since the tree is a binary tree, each node can have 0, 1, or 2 children. The left and right properties can be used to access the current nodes left and right children. All nodes have an ornament property, which is the name of the ornament, and a color property, which represents the color of the ornament.

// Santa's Binary Christmas Tree Requirements
// A valid Binary Christmas Tree will meet the following requirements:

// Root node has a 'star' ornament
// Nodes with zero children (excluding the root node) have a 'blue' colored ornament
// Nodes with one or two children (excluding the root node) have a 'red' colored ornament

function isValidTree(tree) {
  let isValid = true;

  function deepDiver(obj) {
    if (obj.right || obj.left) {
      if (obj.color !== "red") isValid = false;

      if (obj.right) {
        deepDiver(obj.right);
      }
      if (obj.left) {
        deepDiver(obj.left);
      }
    } else if (!obj.left && !obj.right) {
      if (obj.color !== "blue") isValid = false;
    }
  }

  if (tree.ornament === "star") {
    if (tree.left) {
      deepDiver(tree.left);
    }
    if (tree.right) {
      deepDiver(tree.right);
    }
  } else {
    isValid = false;
  }
  return isValid;
}

// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(num) {
  let divisors = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors.length === 0 ? `${num} is prime` : divisors;
}

// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Note that in the very beginning the queue looks like that:

// Sheldon, Leonard, Penny, Rajesh, Howard
// ##Input

// The input data consist of an array which contains at least 1 name, and single integer n.

function whoIsNext(names, r) {
  let total = 0,
    n = 0,
    flag = false,
    len = names.length;
  if (r <= names.length) {
    return names[r - 1];
  }
  while (total < r && !flag) {
    total += len * Math.pow(2, n);
    n++;
    if (total + len * Math.pow(2, n) >= r) {
      flag = true;
    }
  }
  var numInPlace = Math.pow(2, n);
  var remainder = r - total;
  var place = Math.ceil(remainder / numInPlace);
  return names[place - 1];
}

// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n) {
  let removed = 0;
  let stringArr = s.split("");

  for (let i = 0; removed < n; i++) {
    if (i > stringArr.length) {
      break;
    }
    if (stringArr[i] === "!") {
      stringArr.splice(i, 1);
      i--;
      removed++;
    }
    continue;
  }
  return stringArr.join("");
}

// Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.
function checkThreeAndTwo(array) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  array.forEach(letter => {
    if (letter === "a") {
      aCount++;
    } else {
      if (letter === "b") {
        bCount++;
      } else {
        cCount++;
      }
    }
  });
  return (
    (aCount + bCount === 5 && aCount > 1 && bCount > 1) ||
    (bCount + cCount === 5 && bCount > 1 && cCount > 1) ||
    (aCount + cCount === 5 && aCount > 1 && cCount > 1)
  );
}

// I don't think we have this specific prime kata on codewars, yet.

// It's really simple:

// Get the next prime number!

// You will get a number n (n>=0) and your task is to find the next prime number.

// e.g: nextPrime(5)=>7 || nextPrime(12)=>13

// Make sure to optimize your code. There will be huge numbers in the tests!

const nextPrime = n => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = n => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, curr) => acc + curr, 0);
}

// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If the sum cannot be calculated, 0 should be returned.

function magicSum(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    if (number % 2 !== 0 && number.toString().indexOf("3") !== -1) {
      sum += number;
    }
  });
  return sum;
}

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.

function isValidParenth(str) {
  let parenthBalance = 0;

  str.split("").forEach(par => {
    if (parenthBalance < 0) {
      return false;
    } else if (par === "(") {
      parenthBalance++;
    } else {
      parenthBalance--;
    }
  });

  return parenthBalance === 0;
}

// In this Kata, we will calculate the minumum number that is not possible sum from a list of integers.

// solve([1,2,8,7]) = 4, because we can get 1, 2, 1+2=3. But 4 is the minimum number not possible from the list.
// solve([4,2,12,3,1]) = 11. We have 1, 2, 3, 4, 4+1=5, 4+2=6, 4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But no 11.
// solve([4,2,12,3]) = 1
// More examples in test cases.

// Good luck!

function solve(arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] > 1) return 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i + 1] > sum + 1) return sum + 1;
  }
  return sum + 1;
}

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// +============+=============+===============+
// | Card Type  | Begins With | Number Length |
// +============+=============+===============+
// | AMEX       | 34 or 37    | 15            |
// +------------+-------------+---------------+
// | Discover   | 6011        | 16            |
// +------------+-------------+---------------+
// | Mastercard | 51-55       | 16            |
// +------------+-------------+---------------+
// | VISA       | 4           | 13 or 16      |
// +------------+-------------+---------------+
// Write a function (getIssuer(number) (get_issuer(number) for Python)) that will use the above known values to determine the card issuer given a card number. If the number cannot be matched then the function should return the string Unknown.

// Some sample numbers and their issuer:

// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
// Note: ranges stated in this kata are inclusive.

function getIssuer(cardNum) {
  const cardNumString = cardNum.toString();

  if (cardNumString.length === 13 || cardNumString.length === 16) {
    if (cardNumString.length === 13) {
      cardNumString[0] == 4 ? "VISA" : "Unknown";
    } else {
      if (cardNumString[0] == 4) {
        return "VISA";
      } else if (
        Number(cardNumString.slice(0, 1)) >= 51 &&
        Number(cardNumString.slice(0, 1)) <= 55
      ) {
        return "Mastercard";
      } else if (Number(cardNumString.slice(0, 3)) === 6011) {
        return "Discover";
      } else {
        return "Unknown";
      }
    }
  } else if (
    cardNumString.length === 15 &&
    (Number(cardNumString.slice(0, 1)) === 34 ||
      Number(cardNumString.slice(0, 1)) === 37)
  ) {
    return "AMEX";
  } else {
    return "Unknown";
  }
}

// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Note: this function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

function randomCase(x) {
  return x
    .split("")
    .map(function(e) {
      return Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase();
    })
    .join("");
}

// Let's create some scrolling text!

// Your task here is to write the function scrollingText (scrolling_text in Python), which takes a string, and returns an array:

// scrollingText("codewars") should return

// ["CODEWARS",
// "ODEWARSC",
// "DEWARSCO",
// "EWARSCOD",
// "WARSCODE",
// "ARSCODEW"
// "RSCODEWA",
// "SCODEWAR"]
// Good luck!

function scrollingText(str) {
  let tempArr = [];
  let finalArr = [];
  let upperCase = str.toUpperCase().split("");
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < str.length; k++) {
      tempArr.push(upperCase[k]);
    }
    finalArr.push(tempArr.join(""));
    tempArr = [];
    upperCase.push(upperCase[0]);
    upperCase.splice(0, 1);
  }
  return finalArr;
}

// In this kata you're expected to find the longest consecutive sequence of positive squares that sums up to a number.

// E.g,

// 595 = 62 + 72 + 82 + 92 + 102 + 112 + 122 .

// Your task is to write the function longestSequence(n) that either finds the longest consecutive sequence of squares that sums to the number n, or determines that no such sequence exists.

// longestSequence(50) // => [3, 4, 5]
//     // 9 + 16 + 25 = 50

// longestSequence(595) // => [6, 7, 8, 9, 10, 11, 12]

// longestSequence(10) // => []
// Return an empty array if no such sequence exists.

function longestSequence(num) {
  let options = [];
  let squares = [];

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    squares.push(i * i);
    for (let j = 0; j < squares.length; j++) {
      let current = squares.slice(j);
      tempSum = 0;
      for (let k = 0; k < current.length; k++) {
        tempSum += current[k];
        if (tempSum === num) {
          options.push(current.slice(0, k + 1));
        }
      }
    }
  }

  return (
    options.sort((a, b) => a.length > b.length)[0].map(val => Math.sqrt(val)) ||
    []
  );
}

function longestSequence(num) {
  let options = [];
  let squares = [];

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    squares.push(i * i);
  }
  for (let j = 0; j < squares.length; j++) {
    let tempArr = squares.slice(j);
    let tempSum = 0;
    for (let k = 0; k < tempArr.length; k++) {
      tempSum += tempArr[k];
      if (tempSum === num) {
        options.push(tempArr.slice(0, k + 1));
      }
    }
  }
  console.log(options.sort((a, b) => a.length < b.length));
  return (
    options.sort((a, b) => a.length < b.length)[0].map(val => Math.sqrt(val)) ||
    []
  );
}

function longestSequence(n) {
  let m = Math.sqrt(n) | 0;
  for (let i = 1; i <= m; i++) {
    let sum = 0,
      arr = [];
    for (let j = i; j <= m; j++) {
      sum += j * j;
      arr.push(j);
      if (sum === n) return arr;
      if (sum > n) break;
    }
  }
  return [];
}

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.

// Dates may be passed in as strings or as Objects.

function getDayOfTheWeek(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[new Date(date).getDay()];
}

// Congrats! You are now living on your own as a student for the first time. Mom & Dad set you up with a savings account and gave you a lump sum of cash to get you through the next year. Will you make it?

// The function has three inputs: cash (the lump sum from your parents), monthly expenses, and the monthly interest rate on your bank account.

// The output should be the amount of money leftover after 12 months or the number of months before you ran out of money. Formatting should be as in these examples:

// manageMoney(10000,800,0.2) returns "You still have $536.35"

// manageMoney(10000,1000,0.2) returns "You ran out of money after 10 months"

// Some notes:

// Assume that expenses are paid at the end of the month in one lump sum. Interest is paid at the end of the month. All of the cash starts out in the savings account.
// Round your final answer to the nearest two decimal places for cash, to integers for months.
// An interest rate of 0.2 means 0.2%, not 20%.
// Despite usual grammar rules "...after 1 months" is the expected result in such a case

const manageMoney = (cash, expenses, rate) => {
  let i = 0;
  while (cash && i < 12) {
    cash += rate / 100 * cash;
    cash -= expenses;
    if (cash < 0) break;
    i++;
  }
  return cash < 0
    ? `You ran out of money after ${i} months`
    : `You still have $${cash.toFixed(2)}`;
};

// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 140, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

function findHack(arr) {
  let res = [];
  arr.forEach(val => {
    if (val[1] > 200 || sum(val[2]) != val[1]) {
      res.push(val[0]);
    }
  });
  return res;
}

let dictionary = {
  A: 30,
  B: 20,
  C: 10,
  D: 5
};

let sum = arr => {
  let bonus = 0;
  if (arr.length > 4) {
    arr = arr.sort();
    if (arr[arr.length - 1] == "B" || arr[arr.length - 1] == "A") {
      bonus = 20;
    }
  }
  return (
    bonus +
    arr.reduce(
      (total, val) => (dictionary[val] ? total + dictionary[val] : total),
      0
    )
  );
};

// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

function spam(number) {
  return "hue".repeat(number);
}

// A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

// Good luck!

function solve(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  let maxCount = 0;
  let subStringArr = str.split(/[aeiou]/).filter(substring => substring);

  subStringArr.forEach(substring => {
    let value = 0;
    substring.split("").forEach(letter => {
      value += alphabet[letter];
      if (value === 26) {
        return 26;
      }
    });
    if (value > maxCount) {
      maxCount = value;
    }
  });
  return maxCount;
}

// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

//  For instance:
//   2 = jump two indices to the right
//  -3 = jump three indices to the left
//   0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

function frogJump(arr) {
  if (arr.length === 0 || arr.reduce((a, b) => a + b) === 0) {
    return -1;
  }
  let currentPosition = 0;
  let lastPosition = 0;
  let swapper;
  let jumpCount = 0;
  while (arr[currentPosition] !== undefined) {
    jumpCount++;
    swapper = currentPosition;
    currentPosition += arr[currentPosition];
    lastPosition = swapper;
  }
  return jumpCount;
}

// We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, this time they've been all garbled up!

// Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.

// In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:

// Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)
// Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long - no trailing words with fewer than 5 letters!
// Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)
// Some of the transmissions are only garbled data. If you are given an empty string or a string that doesn't contain any letters, then please return an empty string at the end.

// Even if you can't read the Gibberish, that's okay as long as you've formatted it according to the language rules!

// Good luck :)

function cleanItUp(str) {
  let filteredArr = str
    .toLowerCase()
    .split("")
    .filter(char => true)
    .filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);

  let splitArr = [];
  let tempWord = "";

  for (let i = 0; i < filteredArr.length; i++) {
    tempWord += filteredArr[i];
    if ((i + 1) % 5 === 0) {
      splitArr.push(tempWord);
      tempWord = "";
    }
  }
  return splitArr.map(word => word.toUpperCase()[0] + word.slice(1)).join(" ");
}

// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggers will of course take nothing (0).

function beggars(values, n) {
  if (n === 0) {
    return [];
  }
  const resultsArr = [];
  let currentBeggar = 0;

  values.forEach(amount => {
    resultsArr[currentBeggar] = resultsArr[currentBeggar]
      ? resultsArr[currentBeggar] + amount
      : amount;
    currentBeggar++;
    if (currentBeggar === n) {
      currentBeggar = 0;
    }
  });

  if (resultsArr.length < n) {
    let leftoutBeggars = n - resultsArr.length;
    while (leftoutBeggars > 0) {
      resultsArr.push(0);
      leftoutBeggars--;
    }
  }

  return resultsArr;
}
