"use strick";

class War {
  constructor() {
    this.reminder = "STOP WAR IN UKRAINE - STAND WITH UKRAINE";
  }
  remind = () => console.log(this.reminder);
}

// ------------------------------------------------------------------------

class Flower extends War {
  #counter;
  constructor(name, colour, amount) {
    super();
    this.name = name;
    this.colour = colour;
    this.amount = amount;
    this.flowerShop = "Peremohy st 67, Kyiv";
    this.#counter = 0;
  }

  whatColour = () =>
    console.log(`${this.name} is available in ${this.colour} colour.`);

  whereToBuy = () =>
    console.log(
      `You can buy ${this.name} in a flower shop at ${this.flowerShop}`
    );

  soldFlower() {
    if (this.#counter < this.amount) {
      this.#counter = this.#counter + 1;
      console.log(`Thanks for buying ${this.name}`);
    } else {
      console.log(`Sorry, we do not have ${this.name} any more`);
    }
  }
}

const rose = new Flower("Rose", "white", "2");

rose.remind();
rose.whatColour();
rose.whereToBuy();
rose.soldFlower();
console.log(rose);

// ------------------------------------------------------------------------

class Student extends War {
  #yearOfStudy;
  constructor(firstName, secondName, faculty, phrase, job, yearOfStudy) {
    super();
    this.firstName = firstName;
    this.secondName = secondName;
    this.faculty = faculty;
    this.phrase = phrase;
    this.job = job;
    this.#yearOfStudy = yearOfStudy;
  }

  introduction = () =>
    console.log(
      `Hello! My name is ${this.firstName} ${this.secondName} and I study ${this.faculty}`
    );
  work = () => console.log(`Currently I work as a ${this.job}`);

  sayPhrase = () => console.log(this.phrase);

  passExam(exam) {
    if (exam === true) {
      this.#yearOfStudy = this.#yearOfStudy + 1;
      console.log(`${this.firstName}, congratulations, see you next semester`);
    } else {
      console.log(`${this.firstName}, you must pass an exam`);
    }
  }
}

const maryna = new Student(
  "Maryna",
  "Nykytenko",
  "History",
  "I would like to reccomend our university",
  "tutor",
  3
);

maryna.remind();
maryna.introduction();
maryna.work();
maryna.sayPhrase();
maryna.passExam(true);
console.log(maryna);

// ------------------------------------------------------------------------

class Hospital extends War {
  constructor() {
    super();
    this.department = "emergency";
    this.address = "Front St 205, Kyiv";
    this.phone = "+38 066 567 45 67";
  }
  findHospital = () =>
    console.log(`Hospital address: ${this.address}. Tel: ${this.phone}`);
}

class Patient extends Hospital {
  #daysInHospital;
  constructor(name, symptom) {
    super();
    this.name = name;
    this.symptom = symptom;
    this.#daysInHospital = 0;
  }

  introducePatient = () => console.log(`${this.name} has ${this.symptom}`);

  takeMedicine = () =>
    console.log(`${this.name}, dont forget to take medicine`);

  countDaysInHospital(symptom) {
    if (symptom) {
      this.#daysInHospital = this.#daysInHospital + 1;
      console.log(`${this.name}, dont worry, we'll help you`);
    } else {
      console.log("Goodbye!");
    }
  }
}

const stepan = new Patient("Stepan Semenov", "fever");

stepan.remind();
stepan.findHospital();
stepan.introducePatient();
stepan.takeMedicine();
stepan.countDaysInHospital("fever");
console.log(stepan);

class Doctor extends Hospital {
  #salary;
  constructor(name, experience, type) {
    super();
    this.name = name;
    this.experience = experience;
    this.type = type;
    this.#salary = 3000;
  }

  introduceYourself = () =>
    console.log(
      `My name is ${this.name}, I work in an ${this.department} department.`
    );

  needToKnow = () =>
    console.log(
      `I am a ${this.type} and I have ${this.experience} of experience`
    );

  countSalary(numberOfPatients) {
    if (numberOfPatients < 10) {
      console.log(`Your salary ${this.#salary}$`);
    } else if (numberOfPatients >= 10 && numberOfPatients < 20) {
      this.#salary = this.#salary * 2;
      console.log(`Your salary ${this.#salary}$`);
    } else {
      this.#salary = this.#salary * 3;
      console.log(`Your salary ${this.#salary}$`);
    }
  }
}

const drJohn = new Doctor("John Didyk", "10 years", "surgeon");

drJohn.remind();
drJohn.findHospital();
drJohn.introduceYourself();
drJohn.needToKnow();
drJohn.countSalary(16);
console.log(drJohn);
