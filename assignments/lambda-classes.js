// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructors extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(grade, subject) {
    console.log(`${Students.name} receives a perfect score on ${subject}`);
  }

}

class Students extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
  }

  listSubjects() {
    console.log(`${this.name}'s favorite subjects are as follows`);
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name}  has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class Product_Managers extends Instructors {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(obj, subject) {
    console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`);
  }
}

const pace = new Product_Managers({
  name: "Pace",
  age: 37,
  location: "Salt Lake City",
  specialty: "Front End",
  favLanguage: "Javascript",
  catchPhrase: "Hello",
  gradClassName: "WebPT9",
  favInstructor: "Ray"
});

const ray = new Instructors({
  name: "Ray",
  age: 35,
  location: "Seattle",
  specialty: "Back End",
  favLanguage: "Java",
  catchPhrase: "World"
});

const jorge = new Students({
  name: "Jorge",
  age: 26,
  location: "Los Angeles",
  previousBackground: "Operations Management",
  className: "Full Stack Web Development",
  favSubjects: ["AI", "Video Games", "Learning"],
});

//Testing Logs
console.log(pace);
console.log(ray);
console.log(jorge);

//Testing Methods
pace.standUp(`PT9`);
pace.debugsCode(ray, ray.specialty);
pace.speak();

ray.demo(jorge.className);
ray.grade(jorge, jorge.className);
ray.speak();

jorge.listSubjects();
jorge.PRAssignment(jorge.className);
jorge.sprintChallenge("React");
jorge.speak();