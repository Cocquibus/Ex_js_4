let phrase = "Bonjour tout le monde ";
console.log(phrase.length);
phrase = phrase.trim()
console.log(phrase.length);
console.log(phrase[20])
phrase = phrase.replace("Bonjour", " ");
console.log(phrase);
phrase = phrase.replace(" ", "Bonjour");
console.log(phrase);
phrase = phrase.replace("tout le monde", " ");
console.log(Math.random())

let prenom = prompt();
console.log("bonjour" + " " + prenom);
let age = prompt();
console.log("tu as" + " " + age + "ans");

prenom = prompt();
nom = prompt();
console.log("tu es" + prenom + " " + nom);

prenom = prompt();
nom = prompt();
console.log("tu es" + prenom + " " + nom.toUpperCase());