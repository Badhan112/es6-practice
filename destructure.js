const person = {
    name: "Jack Wiliam",
    age: 17,
    job: "programmer",
    gfName: "Ema Watson",
    address: "kata Bon",
    phone: "0123456789",
    friends: ["Tom Hancks", "Tom Cruish", "Tom Yean"],
}

console.log(person.gfName, person.phone);
console.log(person.gfName, person.phone);

const gfName = person.gfName;
const name = person.name;
console.log(gfName, name);
console.log(gfName, name);

const {phone, job} = person;
console.log(phone, job);

const friend = ["Badhan", "Aakash", "Puja", "Chalentica"];
const [bestFriend, nextFriend, ...remaining] = friend;
console.log(bestFriend, nextFriend);
console.log(remaining);

const complexObject = {
    id: "1720112",
    name: {
        firstName: "Badhan",
        lastName: "Chandra Barman",
    },
    address: "Thakurgaon",
}

const {firstName, lastName} = complexObject.name;
console.log(firstName, lastName);