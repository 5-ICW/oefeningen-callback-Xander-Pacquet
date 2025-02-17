/**
 * schrijf alle voorgaande oefeningen opnieuw uit in
 * oef12, oef22, oef32, oef42, oef52 maar maak
 * nu gebruik van een arrow function
 */

// oef12
const doIets2 = (text, callback) => callback(text.toUpperCase());
// Verwacht resultaat: "HALLO WERELD"
doIets2("Hallo wereld", (resultaat) => console.log(resultaat));

// oef22
const processArray = (arr, callback) => {
  // Vul de functie in
};
for (let i = 0; i < arr.length; i++) {
  arr[i] = callback(arr[i]);
}
// Verwacht resultaat: [2, 4, 6, 8, 10]
processArray([1, 2, 3, 4, 5], function (num) {
  return num * 2;
});

// oef32
const doubleNumber2 = (num, callback) => callback(num * 2);

// Verwacht resultaat: 10
doubleNumber2(5, (result) => console.log(result));

// oef42
const telOp2 = (lijst, callback) => {
  let resultaat = 0;
  for (let i = 0; i < lijst.length; i++) {
    resultaat += lijst[i];
  }
  callback(resultaat);
};

// Verwacht resultaat: 35
telOp2([5, 8, 10, 2, 3, 7], (resultaat) => console.log(resultaat));

// oef52 (processArray met arrow function)
const processArray2 = (arr, callback) => {
  let resultaat = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    resultaat[i] = callback(arr[i]);
  }
  return resultaat;
};

// Verwacht resultaat: [2, 4, 6, 8, 10]
console.log(processArray2([1, 2, 3, 4, 5], (num) => num * 2));
