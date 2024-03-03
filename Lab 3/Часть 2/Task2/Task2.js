/*Перевернуть введенную пользователем строку задом наперед.*/

let str = prompt("Введите строку","");

let res= str.split('');
res=res.reverse();
res=res.join('');


console.log(res);