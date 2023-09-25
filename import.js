// const add = (a , b) =>  {
//     return a + b;
// }
// module.exports = add;

module.exports = (a , b) => { // directly assign
    return a * b;
}

const plus = (a , b) => {
    return a + b;
}

const subtract = (a , b) => {
    return a - b;
}
module.exports  = {subtract , plus};