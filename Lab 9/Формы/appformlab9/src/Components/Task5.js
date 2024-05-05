import React, { useState } from 'react';

const variants = {
  all: 'Все',
  even: 'Чет',
  uneven: 'Нечет',
};

const NumberList = () => 
  {
  const [num, setNum] = useState([1, 13, 6, 52, 4, 14]);
  const [newNum, setNewNum] = useState('');
  const [value, setValue] = useState('Все');

  const handleAddNumber = () => {
    if (newNum.trim() !== '') 
      {
      setNum([...num, parseInt(newNum, 10)]);
      setNewNum('');
    }
  };

  const filteredNumbers = num.filter((n) => {
    if (value === variants.even)
       {
      return n % 2 === 0;
    } 
    else if (value === variants.uneven) 
      {
      return n % 2 !== 0;
    }
    return true;
  });

  return (
    <div>
      <form>
        <input type="number" value={newNum} onChange={(e) => setNewNum(e.target.value)} />
        <button type="button" onClick={handleAddNumber}>+</button>
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          {Object.values(variants).map((variant, index) => (
            <option key={index} value={variant}>
              {variant}
            </option>
          ))}
        </select>
      
      </form>
      <ul >
          {filteredNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
    </div>
  );
};

export default NumberList;