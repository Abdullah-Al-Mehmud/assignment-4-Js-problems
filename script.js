//// problem 1
function cubeNumber(number) {
  if (typeof number !== "number" || number <= 0) {
    return "provide me a valid positive number";
  } else {
    return number * number * number;
  }
}
console.log(cubeNumber(4));

////// problem 2
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide me string";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(matchFinder("john", "ohn"));
////// problem 3
function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "please provide an array";
  } else {
    for (item of arr) {
      if (item < 0) {
        return "invalid input";
      }
    }
  }
  let newArr = [];
  let maximum = Math.max(arr[0], arr[1]);
  let minimum = Math.min(arr[0], arr[1]);
  newArr.push(maximum);
  newArr.push(minimum);
  if (maximum === minimum) {
    return "equal";
  }
  return newArr;
}
console.log(sortMaker([2, 3]));

/////////////// problem 4
let person = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

function findAddress(obj) {
  let street = obj.street || "__,";
  let house = obj.house || "__";
  let society = obj.society || "__";
  return street + "," + house + "," + society;
}
console.log(findAddress(person));

////////////////// problem 5
function canPay(changeArray, totalDue) {
  if (changeArray.length <= 0) {
    return "please provide an array";
  } else {
    let sum = 0;
    for (item of changeArray) {
      sum = sum + item;
    }
    if (sum === totalDue || sum > totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(canPay([1, 5, 5], 10));
