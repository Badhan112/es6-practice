const age = [4, 5, 7, 9, 12];
const age2 = [14, 15, 17, 19, 20];
const allAges = age.concat(age2);
console.log(allAges);

const age3 = [24, 25, 27, 29, 30];
const allAges2 = age.concat(age2).concat(age3);
console.log(allAges2);

const allAges3 = age.concat(age2).concat([50]).concat(age3);
console.log(allAges3);

const allAges4 = [...age, ...age2, ...age3];
console.log(allAges4);

const allAges5 = [...age, ...age2, 50, ...age3];
console.log(allAges5);

const business = 450;
const minister = 350;
const sochib = 250;

const max = Math.max(business, minister, sochib);
console.log(max);

const money = [350, 250, 450, 550];
const max2 = Math.max(...money);
console.log(max2);