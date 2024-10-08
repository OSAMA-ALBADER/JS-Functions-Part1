function printName() {
  console.log("my name is osama");
}
printName();

function printAge(birthyear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthyear;
  console.log("Your age is " + age);
}

function printAgeAndName(Birthyear, yourName) {
  const age = 2024 - Birthyear;
  console.log(`Hello your name is ${yourName} you are ${age} years old`);
}
printAgeAndName(2000, "osama");

function printHello(name, language) {
  if (language == "en") console.log(`Hello ${name}`);
  else if (language == "es") console.log(`Hola ${name}`);
  else if (language == "fr") console.log(`Bomjour ${name}`);
  else if (language == "tr") console.log(`Merhaba ${name}`);
}

function printMax(First, Second) {
  if (First > Second) console.log(First + " is the bigger number");
  else if (First < Second) console.log(Second + " is the bigger number");
}
printMax(10, 20);
