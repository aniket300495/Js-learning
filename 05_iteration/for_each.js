const coding = ['js', 'ruby', 'java', 'python', 'c++'];

// callback function does not have name
// coding.forEach(function (item) {
//     console.log(item);
// });

let myArray = ['luffy', 'tanjiro', 'gojo', 'zoro', 'shanks'];
// myArray.forEach((value) => {
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(index, item, arr);
// })

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageFileName);
    console.log(item.languageName);
})