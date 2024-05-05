import { useState, useEffect } from 'react';

const SecLive = () => {
  const [bDay, setbDay] = useState('');
  const [sec, setSec] = useState(0);

  const calSecLife = (bDay) => 
    {
    const bDayTime = new Date(bDay).getTime();
    const curTime = new Date().getTime();
    return Math.floor((curTime - bDayTime) / 1000);
  };

  useEffect(() =>
     {
        const news = setInterval(() => {setSec(calSecLife(bDay));
    }, 1000);
    return () => clearInterval(news);
  }, [bDay]);

  return (
    <div>
    <form >
        <input type="date" value={bDay} onChange={(e) => setbDay(e.target.value)}/>   
    </form>
    <p> {`Прожили: ${sec} секунд`} </p>
    </div>
  );
};

export default SecLive;