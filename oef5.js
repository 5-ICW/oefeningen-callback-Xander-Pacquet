/**
 * Maak een functie totaal die een array als eerst parameter heeft
 * en een callback als tweede paramater.
 * Als resultaat telt hij alle nummer op van de array
 */

function telOp(lijst, callback) {
  let resultaat = 0;
  for (let i = 0; i < lijst.length; i++) {
    resultaat += lijst[i];
  }
  return callback(resultaat);
}

// Verwacht resultaat: 35
telOp([5, 8, 10, 2, 3, 7], function (resultaat) {
  console.log(resultaat);
});
