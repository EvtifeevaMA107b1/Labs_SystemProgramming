import  { useState } from 'react';
function TimerBtn()
{    const [isOn, setisOn] = useState(false);
    const [count, setCount] = useState(0);

    const timer=()=>
    {
    if (isOn) {
        setCount(count+1);
    }
      else
      {
        setCount(0);
        
      }};
  setTimeout(timer,1000)
   
    
    const handleClick = () => {
        if(!isOn)
        {
            setisOn(true);
        }
        else{
            setCount(0);
            setisOn(false)
           
        }
     
    };
    return(
        <div>
        <p>{count}</p>
        <button onClick={handleClick} style={{'backgroundColor': 'aqua'}}>▶</button>
        </div>
       
    );
}
export default TimerBtn
