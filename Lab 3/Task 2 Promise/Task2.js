/*Решить задачу со счётчиком N, N-1 ... 2, 1, 0 через функцию delay.*/


function delay(N)
{
    
    return new Promise ( (resolve)=>
        {
            let count=N;
            function counter(count)
            {
                if(count<0)
                {
                   
                   resolve();
                   return;
                }
                console.log(count);
                
                setTimeout(counter,1000,count-1);
            }
            counter(count);
        });
}

let N=10;
delay(N)
    .then(
        result=>{
            console.log("Все!");
        }
    )