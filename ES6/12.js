var arr = [1,2,3,4,5,6,7,8,9,10];
var result = arr.reduce((a,b) => {
    return a+b;
})
console.log('result = '+result);
// ES6 可以在node.js 、unipapp、微信小程序中大量使用