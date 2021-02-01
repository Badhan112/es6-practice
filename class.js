class Student{
    constructor(sName, sId){
        this.name = sName;
        this.id = sId;
        this.school = "Programming Hero";
    }
}

const student1 = new Student("Badhan", 112);
const student2 = new Student("Puja", 1);

console.log(student1);
console.log(student2);

student1.id = 2;
console.log(student1.id);

console.log(student1);