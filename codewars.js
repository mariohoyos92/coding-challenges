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
