/*Посчитать максимум и минимум массива:*/
const arr = [1, 6, -1, 22, 13];

let min_arr=arr[0];
let max_arr=arr[0];
for (var i=0;i<arr.length;i++)
{
    if(min_arr>arr[i])
    {
        min_arr=arr[i];
    }
    if(max_arr<arr[i])
    {
        max_arr=arr[i];
    }
}

console.log("Мин: "+min_arr);
console.log("Max: "+max_arr);
