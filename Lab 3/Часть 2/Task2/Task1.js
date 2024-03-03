/*Перевернуть строку задом наперёд:*/

const str = "!тевирП";

let res= str.split('');
res=res.reverse();
res=res.join('');


console.log(res);