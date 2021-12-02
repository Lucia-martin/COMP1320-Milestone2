// const grades = [
//     {name: 'John', grade: 80, sex: 'M'},
//     {name: 'Sarah', grade: 96, sex: 'F'},
//     {name: 'Bob', grade: 54, sex: 'M'},
//     {name: 'Johnny', grade: 87, sex: 'M'},
//     {name: 'Ethan', grade: 48, sex: 'M'},
//     {name: 'Paula', grade: 90, sex: 'F'},
//     {name: 'Donald', grade: 98, sex: 'M'},
//     {name: 'Jennifer', grade: 93, sex: 'F'},
//     {name: 'Courtney', grade: 65, sex: 'F'},
//     {name: 'Jane', grade: 80, sex: 'F'}
// ];

// let boyFilter = (grades) => grades.filter((student) => student.sex === "M");

// //get average for all students

// let average = (gradeArray) => gradeArray.reduce((acc, nextVal) => {
// return acc + nextVal.grade;}, 0) /gradeArray.length;

// console.log(average(grades));

// console.log(average(boyFilter(grades)))

// const inputs = [
//     "buy",
//     "it",
//     "use",
//     "it",
//     "break",
//     "it",
//     "fix",
//     "it",
//     "trash",
//     "it",
//     "change",
//     "it",
//     "mail",
//     "upgrade",
//     "it",
// ];

// const wordCount = (arrayOfWords) => arrayOfWords.reduce((acc, nextVal) => {
//     return {...acc , [nextVal]: (acc[nextVal] || 0) + 1}
// }, {})

// console.log(wordCount(inputs));

// const input = [
//     "buy",
//     "it",
//     "use",
//     "it",
//     "break",
//     "it",
//     "fix",
//     "it",
//     "trash",
//     "it",
//     "change",
//     "it",
//     "mail",
//     "upgrade",
//     "it",
// ];

 
// let result = input.reduce(function (acc, nextVal) {
//     if(nextVal in acc) {
//         acc[nextVal]++;
//     } 
//     else  {
//         acc[nextVal] =1;
//     }
//     return acc;
// }, {})

// console.log(result)

// const resultss = (wordArray) => wordArray.reduce((acc, nextVal) => {
//     return ({ ...acc, [nextVal]: (acc[nextVal] || 0) + 1 })
// }, {})
 
// console.log(resultss(input))


// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})

// console.log(countedNames);

// let countInstances = (array) => {
//     return array.reduce((acc, nextVal) => {
//         if(nextVal in acc) {
//             acc[nextVal]++;
//         } else {
//             acc[nextVal] = 1;
//         }
//         return acc;
//     }, {})
    
    
// }

// const counterWords = (list) => {
//    return list.reduce((acc, nextVal) => {
//         if(nextVal in acc) {
//             acc[nextVal]++;
//         } else {
//             acc[nextVal] = 1;
//         }
//         return acc;
//     }, {})
// }


// filterObjects(counterWords(input))
// console.log(counterWords(input))

// console.log(countInstances(names))

const { markAsUntransferable } = require("worker_threads");
 
let newSquaredList = [];
 
function squareList(listOfNumbers) {
    listOfNumbers.forEach((number) => {
        let newNumber = number * number;
        newSquaredList.push(newNumber)
    })
 
    return newSquaredList;
}
 
const list = [1, 2, 3, 4, 5, 6, 7];
 
console.log(squareList(list));
 
console.log(list.map((num) => num * num));
 
function mapfunction(list) {
    return list.map((num) => num * num)
}
 
console.log(mapfunction(list));
 
function filter(list) {
    return list.filter((num) => num > 3)
}
 
console.log(filter(list));
 
let sumResult = 0;
 
function sum(list) {
    list.forEach((num) => {
        sumResult = sumResult + num;
    })
    return sumResult;
}
 
console.log(sum(list));
 
function reduceSum(list) {
    return list.reduce((previousValue, currentValue) => previousValue + currentValue)
}
 
console.log(reduceSum(list));
 
 
//question one -
 
const numbers = [1, 2, 3, 4, 5];
 
function timesThree(array) {
    return array.map((num) => num * 3);
}
 
console.log(timesThree(numbers))
 
 
//question two -
 
const movies = ["Spiderman", "Batman", "Superman"];
 
function makeLi(array) {
    return array.map((movie) => `<li>${movie}</li>`);
}
 
console.log(makeLi(movies));
 
//question three -
 
let things = ["dog", "cats", "friend", "books"];
 
function makePlural(array) {
    return array.map((word) => {
        if (word.endsWith("s")) {
            return word;
        }
        else {
            return word += "s"
        }
    })
}
 
console.log(makePlural(things));
 
 
//question 4
 
const numList = [1, -2, 3, -4, 5];
 
function sumPositive(array) {
    return array.filter((num) => num > 0).reduce((acc, nextVal) => acc + nextVal);
}
 
console.log(sumPositive(numList));
 
//question 5
 
function getInitials(fullName) {
    return fullName.split(" ").map((name) => name[0]).join("");
}
 
let name = "Ronald James Richards Sanderson"
 
console.log(getInitials(name));
 
//question 6
 
function nameLessthanEqualToFour(listOfNames) {
    return listOfNames.filter((name) => name.length <= 4 || name === "Jeremy")
}
 
let nameList = ["Elisa", "Elisabeth", "Gyo", "Joey", "Suji", "Jeremy"]
console.log(nameLessthanEqualToFour(nameList))
 
//question 7
 
let hospitals = ["VGH", "Burnaby General", "Childrens Hospital"];
let hList = ["California Hospital", "Edmonton Hospital", "VGH"];
 
function hospitalFilter(list) {
    return list.filter((item) => hospitals.includes(item))
}
 
console.log(hospitalFilter(hList))
 
//question 8
 
const grades = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
];
 
function getBoys(object) {
    return grades.filter((object) => object.sex === "M")
}
 
let boysList = getBoys(grades)
console.log(boysList);
 
 
function getGirls(object) {
    return grades.filter((object) => object.sex === "F")
}
 
console.log(getGirls(grades));
 
function average(list) {
    let gradeList = [];
    list.forEach((object) => gradeList.push(object.grade))
    return gradeList.reduce((acc, nextVal) => acc + nextVal) / list.length
}
 
console.log(average(grades));
 
function averageBoys(listofBoys) {
    let gradeList = [];
    listofBoys.forEach((object) => gradeList.push(object.grade))
    return gradeList.reduce((acc, nextVal) => acc + nextVal) / listofBoys.length
}
 
console.log(averageBoys(boysList));
 
 
// question 9
 
let objectList = {};
 
// const countWords = (wordsList) => {
//     wordsList.forEach((word) => {
//         if (!objectList[word]) {
//             objectList[word] = 1;
//         } else {
//             objectList[word] += 1;
//         }
//     })
//     console.log(objectList)
// }
 
const countWords = (wordsList) => {
    wordsList.forEach((word) => {
        if (!objectList[word]) {
            objectList[word] = [1];
        } else {
            objectList[word].push(1)
        }
    })
    for (const key in objectList) {
        objectList[key] = objectList[key].reduce((acc, nextVal) => acc + nextVal)
    }
    console.log(objectList);
}
 
 
//want to make an array that pushes a one every time the word repeats
//then at the end, reduce it so it adds
const input = [
    "buy",
    "it",
    "use",
    "it",
    "break",
    "it",
    "fix",
    "it",
    "trash",
    "it",
    "change",
    "it",
    "mail",
    "upgrade",
    "it",
];
 
 
const resultss = (wordArray) => wordArray.reduce((acc, nextVal) => {
    return ({ ...acc, [nextVal]: (acc[nextVal] || 0) + 1 })
}, {})
 
console.log(resultss(input))
const output = countWords(input);
 
/*
Output should look like so:
{
  break: 1,
  buy: 1,
  change: 1,
  fix: 1,
  it: 7,
  mail: 1,
  trash: 1,
  upgrade: 1,
  use: 1
}
 
*/
 
 
const grade = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
];
 
//counting with reduce
const reducePractice = (studentArray) => studentArray.reduce((acc, nextValue) => acc + 1, 0);
console.log(reducePractice(grade))
 
//sum grades with reduce
const sumPrac = (stdArray) => stdArray.reduce((acc, nextVal) => acc + nextVal.grade, 0);
console.log(sumPrac(grade))
 
//array of names (map)
const map = (studentArray) => studentArray.map((items) => items.name);
console.log(map(grade))
 
const reduceMap = (studentArray) => studentArray.reduce((acc, nextVal) => [...acc, nextVal.name], [])
console.log(reduceMap(grade))
 
//convert to id => person lookup (dict)
 
 
 
let isBoy = student => student.sex === 'M'
 
let getBoy = grades => (
    grades.filter(isBoy)
)
 
let averages = grades => (
    grades.reduce((acc, next) => acc + next.grade, 0)
)
 
let classroomAverage = averages(grade)
let boysAverage = averages(getBoy(grade))
console.log(classroomAverage);
console.log(boysAverage);
 
 
const makePlurals = (array) => array.map((things) => {
    if (things.endsWith("s")) return things;
    else return things + "s";
})
 
console.log(makePlurals(["dog", "cats", "friend", "books"]));
 
const sumPositives = (array) => array.filter((num) => num > 0).reduce((acc, nextValue) => acc + nextValue)
console.log(sumPositives([1, -2, 3, -4, 5]))
 
const getInitialss = (fullName) => fullName.split(' ').map((name) => name[0]).join('');
console.log(getInitialss("Ronald James Richards Sanderson"))
 
const nameLessThanEqualToFour = (array) => array.filter((name) => name.length <= 4 || name === "Jeremy")
console.log(nameLessThanEqualToFour(nameList));
 
let result = hList.filter((hospital) => {
    if (hospitals.includes(hospital)) return hospital;
})
 
console.log(result);
 
const gettyBoys = (grades) => grades.filter((boys) => boys.sex === "M")
 
console.log(gettyBoys(grades));
 
const gradeAverage = (grades) => grades.reduce((acc, nextVal) => acc + nextVal.grade, 0); //this gets you total sum of grades for everyone
 
const getGradesOnly = (ObjArray) => {
    let array = [];
    ObjArray.forEach((item) => {
 
        array.push(item.grade)
    })
    return array;
}
 
console.log(getGradesOnly(grades));
console.log(gradeAverage(gettyBoys(grades)));
 
 

/*push into users list, the new user, and then call fs. write file to overwirte the file*/