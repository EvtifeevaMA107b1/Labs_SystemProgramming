import  { useState } from 'react';
function ReTimer()
{    const [isOn, setisOn] = useState(true);
    const [count, setCount] = useState(10);

    const timer=()=>
    {
    if (count > 0 & isOn) {
        setCount(count - 1);
    }
      else
      {
        setisOn(false);
        
      }};
  setTimeout(timer,1000)
    
    return(
        <p>{count}</p>
       
    );
}
export default ReTimer