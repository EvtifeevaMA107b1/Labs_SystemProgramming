import React, { useState, useEffect } from 'react';

const SimpleNum = () => {
  const [arr, setArr] = useState([2]);
  
  const isSimple = (num) => 
  {
    for (let i = 2; i <= Math.sqrt(num); i++)
     {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  
  useEffect(() => 
  {
    const timer = setInterval(() => 
    {
      let next = arr[arr.length - 1] + 1;
      while (!isSimple(next)) 
      {
        next++;
      }
      setArr([...arr, next]);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [arr]);
  
  return (
    
     
        <p>{arr.join(', ')}</p>

  );
};

export default SimpleNum;