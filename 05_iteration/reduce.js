const myNums = [1,2,3,4,5,6,7,8,9,10];

// const total = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const total = myNums.reduce( (acc, currval) => acc+currval, 0);

console.log(total);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 499
    },
    {
        itemName: 'react course',
        price: 499
    },
    {
        itemName: 'node course',
        price: 499
    },
    {
        itemName: 'sql course',
        price: 499
    }
];

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartTotal);