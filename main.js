
{
    var num = 0;
    let num1 = 10;
    const num2 = 20;
    console.log(num1);
    console.log(num2);
}

console.log(num);

const func = () => {
    return 'this is const'
}

let funt = () => {
    return 'this is let'
}

// func = 10;

console.log(func());

function func2(){
    return 'declaration funct'
}
func2();

const fun1 = function(){
    return 'Expression func';
}

// параметры по умолчанию
const arrow = (a = 0) => {
    return 'Arrow func ' + a;
}

console.log(arrow(20));

// оператор spreed (копирование массивов и объектов)
let mas = [1, 2, 3, 4];
console.log([...mas, 5, 'dsv']);
console.log([5, 'dsv', ...mas]);

let obj = {name: 'Nuray', age: 23};
console.log({...obj, hobby: 'listen music'});

let mas_obj = [{name: 'Nuray', age: 23}, {name: 'Nuray', age: 23}, [20,30]]
console.log([...mas_obj, {name: 'akyl', age: 19}, [20, 30]]);

const fur = (mas, ...mas2) => {
    return `${mas}, ${mas2}`;
} 

console.log(fur(1, 2, 3, 4, 5, 6));

// Деструктуризация массивов и объектов

let mas4 = [1,'Hi destraction', 3];
let [num1, num2] = mas4;

console.log(num2);
console.log(mas4[1]);

let obj1 = {name: 'Yrys', age: 20, natinal: 'Kyrgyz'};
let {name: name, age: age, natinal: natinal} = obj1

console.log(natinal);
console.log(obj1.natinal);

// Строковые шаблоны и разделители
console.log(1, 'asc');

console.log(`${1} ${'asc'} continue`);

