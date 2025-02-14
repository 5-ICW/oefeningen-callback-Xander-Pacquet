/**
 * Maak een functie doubleNumber die een getal verdubbelt
 * met behulp van een callback.
 */

function doubleNumber(num, callback) {
  resultaat = num;
  return callback(resultaat);
}

// Verwacht resultaat: 10
doubleNumber(5, function (result) {
  console.log(result * 2);
});
