const onePiece = ['luffy', 'sabo', 'zoro', 'sanji', 'chopper', 'franky', 'usopp'];
const demonSlayer = ['tanjiro', 'nezuko', 'zenitsu', 'inosuke', 'rengoku'];

// onePiece.push(demonSlayer);
// console.log(onePiece);
// console.log(onePiece[7][1]);

// const combinedArray = onePiece.concat(demonSlayer);
// console.log(combinedArray);

const allMangaCharacters = [...onePiece, ...demonSlayer];
// console.log(allMangaCharacters);

const anotherArray = [1,2,3, [4,5,6], 7, [6, 7, [4,5]]];
const usableArray = anotherArray.flat(Infinity);
// console.log(usableArray);
// console.log(usableArray.length);

// console.log(Array.isArray("aniket"));
// console.log(Array.from("aniket"));
console.log(Array.from({name: 'aniket'})); // interesting for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));