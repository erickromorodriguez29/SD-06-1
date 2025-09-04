
function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}



const subject = process.argv[3];
const message = process.argv[4];

const newMail = new Mail(subject, message);

console.log(newMail.subject + ": " + newMail.message);