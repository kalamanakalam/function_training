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

function calculateVolumeAndArea(length){
    if(length != '' && length > 0 && Number.isInteger(length)){
        let a;
        a = `Объем куба: ${length * length * length}, площадь всей поверхности: ${6*(length*length)}`;
        return a;
    }else{
        let b = ('При вычислении произошла ошибка');
        return b;
    }
}
console.log(calculateVolumeAndArea(5.5));

function getCoupeNumber(miesto) {
    if(miesto !== '' && Number.isInteger(miesto) && miesto >= 0 ){
        if(miesto === 0 || miesto > 36){
            const a = "Таких мест в вагоне не существует";
            return a;
        }else if(miesto%4 === 0 ){
            return miesto/4;
        }else if(miesto%4 == 1){
            let c = ++miesto/4;
            c = Math.round(c);
            return c;
        }else{
            let d = miesto/4;
            d = Math.round(d);
            return d;
        }
    }else {
        const b = "Ошибка. Проверьте правильность введенного номера места";
        return b;
    }
}
console.log(getCoupeNumber(0));

function getTimeFromMinutes(time) {
    let a = time / 60;
    let b = time % 60;
    let d = parseInt(a);
    if(time != '' && Number.isInteger(time) && time >= 0){
        if(a <= 0.999){
            return `Это ${d} часов и ${b} минут`;
        }else if(a >= 2 && a <= 4){
            return `Это ${d} часа и ${b} минут`;
        }else if(a == 1 ){
            return `Это ${d} час и ${b} минут`;
        }else{
            if( d % 10 == 1 && d != 11 ){
                return `Это ${d} час и ${b} минут`;
            }else if(d % 10 >= 2 && d % 10 <= 4 && d != 12 && d != 13 && d != 14){
                console.log("true");
                return `Это ${d} часа и ${b} минут`
            }
            return `Это ${d} часов и ${b} минут`;
        }
    }else{
        let c =  "Ошибка, проверьте данные";
        return c;
    }
}
console.log(getTimeFromMinutes(740));

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
console.log(findMaxNumber(2, 4, 5, 9))



