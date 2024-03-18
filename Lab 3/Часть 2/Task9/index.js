/*Что выведет этот код? Как сделать так, чтобы он вывел 1, 2, 3?*/


/* Старый код
let i;
for(i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

Вывод: 4 4 4
*/


//Исправленный код
let i;
 for(i = 1; i <= 3; i++) {
  
  let tempI=i;
  setTimeout(() => console.log(tempI), 1000);
}