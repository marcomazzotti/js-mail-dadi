const allowedMails = ["marco@gmail.com", "luca@gmail.com", "luigi@gmail.com", "paola@gmail.com", "roberta@gmail.com"];
// console.log(allowedMails);

//chiedere all'utente la sua mail
const userMail = prompt("Ciao! Inserisci qui la tua mail");
// console.log(userMail);

//verificare se mail è presente nell'array
if (allowedMails.includes(userMail)) {
  console.log("Accesso consentito");
} else {
  console.log("Accesso Negato");
}