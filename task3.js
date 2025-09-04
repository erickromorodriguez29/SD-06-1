function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;

  this.printMail = function () {
    console.log(`${this.subject}: ${this.message}`);
  };
}

const subjectInput = process.argv[2];  
const messageInput = process.argv[3];  

const newMail = new Mail(subjectInput, messageInput);

newMail.printMail();