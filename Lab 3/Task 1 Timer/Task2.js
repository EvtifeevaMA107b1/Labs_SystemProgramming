/*Написать функцию createCounter(n), возвращающую объект с методами:

    start() -- запускает (или возобновляет) счётчик c интервалом 1 секунда: N, N-1.
    pause() -- приостанавливает счёт, но не сбрасывает счётчик.
    stop() -- останавливает счёт, сбрасывает счётчик*/


function createCounter(n)
{
    let timerId;
    let count=n;
    
    function start() //остановка таймера
    {
        function counter(count)//из пред задачи сам таймер
        {
            if(count<0)
            {
                return;
            }
            console.log(count);
        
        
            setTimeout(counter,1000,count-1); 
        }
        counter(count);
    }
    
    function pause() //пауза
    {
        clearTimeout(timerId);
    }
    
    function stop() //остановка и сброс
    {
        clearTimeout(timerId);
        count=n;
    }
    
    return{
        start, pause,stop
    };
}

let n=10;
let timer=createCounter(n);


//наш объект таймер с методами start, pause,stop
timer.start();

//timer.stop();
//timer.pauser();