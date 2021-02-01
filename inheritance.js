class Parent{
    constructor(){
        this.father = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(cName){
        super();
        this.name = cName;
    }
    getFullname(){
        return this.name + " " + this.father;
    }
}

const children = new Child("Arnold");
console.log(children);

console.log(children.getFullname());
