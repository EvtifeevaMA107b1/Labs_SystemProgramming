import React, { useState, useEffect } from 'react';

const UpdateString = ({ str }) => {

  const [newStr, setNewStr] = useState(str);

  useEffect(() => 
  {
    const interval = setInterval(() => 
    {
        setNewStr(lastStr =>
         {
            let lastc = lastStr.charAt(lastStr.length - 1);
            let newStr = lastc + lastStr.substring(0, lastStr.length - 1);
            return newStr;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return( 
     <p>{newStr}</p>
  );
};

export default UpdateString;