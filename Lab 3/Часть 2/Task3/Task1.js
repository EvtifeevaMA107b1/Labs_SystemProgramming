/*Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива:*/

const arr = [3, 5, 8, 13, 21, 42];

let sum=0;

for(let i=0; i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        sum+=Math.sqrt(arr[i]);
    }
}

console.log(sum);