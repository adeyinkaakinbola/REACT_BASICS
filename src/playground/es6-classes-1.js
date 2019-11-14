class Person {
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
        }
        getGreeting(){
            return`Hi.I am ${this.name}`;
        }
        getDescription(){
            return`${this.name} is ${this.age} year(s) old.`;
        }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major =major;
    }
    getInformation(){
        let description = super.getDescription();
        description+= `Major is ${this.major}`;
        return description;
    }
}
const  Student1 = new Student('Adeyinka',21,'Biology');
console.log(Student1);


class Traveler extends Person {
    constructor (name,age,location = 'hapa to'){
        super(name,age);
        this.location = location;
    }
        getInformation(){
            let description = super.getDescription();
            description+= `location is ${this.location}`;
            return description;
        }
    }
    const Traveler1 = new Traveler('Charles',86,'Nakuru');
    console.log(Traveler1.getInformation());
