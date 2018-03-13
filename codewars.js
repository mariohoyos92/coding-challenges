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
