
function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Crear la instancia primero
const newMail = new Mail("hello", "world");

// Luego usarla en el console.log
console.log(newMail.subject + ": " + newMail.message);