import React, { useState, useEffect } from 'react';

const TrafficLight = () =>
 {
  const [color, setColor] = useState('red');

  useEffect(() => 
  {
    const interval = setInterval(() => 
    {
      switch (color) 
      {
        case 'red':
          setColor('green');
          break;
        case 'yellow':
          setColor('red');
          break;
        case 'green':
          setColor('yellow');
          break;
        default:
          setColor('red');
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [color]);

  return (
    <div   className="tr" style={{'margin-left': '47vw'}}>
      <div
        className="light"
        style={{backgroundColor: color === 'red' ? 'red' : 'gray', width: '100px', height: '100px', borderRadius: '50%', margin: '10px',}}>


        </div>
      <div
        className="light"
        style={{backgroundColor: color === 'yellow' ? 'yellow' : 'gray', width: '100px', height: '100px', borderRadius: '50%', margin: '10px',}}>
      </div>
      <div
        className="light"
        style={{backgroundColor: color === 'green' ? 'green' : 'gray', width: '100px', height: '100px', borderRadius: '50%', margin: '10px',}}>
        </div>
    </div>
  );
};

export default TrafficLight;

