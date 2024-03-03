/*Написать функцию counter(n), которая выводит в консоль раз в секунду числа n, n-1 ... 2, 1, 0 и останавливается.*/

//рекурсивно

function counter(n)
{
    if(n<0)
    {
        return;
    }
    console.log(n);
    
    setTimeout(counter,1000,n-1);
}


counter(10)