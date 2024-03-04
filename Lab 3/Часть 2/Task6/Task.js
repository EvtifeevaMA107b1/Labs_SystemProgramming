/*Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи. Так, в консоли будет: 0, 1, 1, 2, 3, 5, 8, 13...*/
let i=0;
function fibNumbers()
 {
    
    let a = 0;
    let b = 1;

    function fibonacci ()
    {
        if(i==0)
        {
            console.log(a)
            i++
        }
        else if(i==1)
        {
            console.log(b)
            i++ 
        }

        else{
            let next = a + b;
            console.log(next);
            a = b;
            b = next;
        }

    };

    setInterval(fibonacci, 1000);
}

fibNumbers();
