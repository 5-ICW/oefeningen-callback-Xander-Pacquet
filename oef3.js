/**
 * Maak een functie greet die een naam aanneemt
 * en een callback uitvoert die de naam gebruikt.
 */

function greet(name, callback) {
  const message = `Hallo, ${name}!`;
  return callback(message);
  // Vul aan
}

// Verwacht resultaat: "Hallo, Sam!"
greet("Sam", function (message) {
  console.log(message);
});
