/*Написать функцию delay(N), возвращающую промис, который сделает resolve() через N секунд.*/

function delay(N)
{
    return new Promise ( (resolve)=>
        {
            setTimeout(resolve,1000*N);
        });
}

let N=10;
delay(N)
    .then(
        result=>{
            console.log("прошло "+N+" секунд");
        }
    )