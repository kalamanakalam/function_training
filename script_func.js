// quest one
function SayHello(name){
    return `Hello ${name}!`;
}
console.log(SayHello('Alex'));

//quest two 
function returnNeighboringNumbers(num){
    let arr = []
    let j = -1;
    for(let i = 0; i < 3; i++){
        arr[i]= num + j; 
        j++;
    }
    return arr;
}
let arr = returnNeighboringNumbers(5);
console.log(arr);

//quest three
function getMathResult(base, mass){
    let a = 0;
    if(typeof(mass) !== "number" || mass <= 0){
        a = base;
    } else { 
        for(let i = 1; i <= mass; i++){
            if(typeof(a) === 'number'){
                a = `${base * i}`; 
            }else{
                a = `${a}---${base * i}`; 
            }
        }
    }
    return a;
}
console.log(getMathResult(10, 0));

