import  { useState } from 'react';
const variants = {
    one: 2,
    two: 10,
};
const NumberBaseConverter = () => 
    {
  const [num, setNum] = useState('');
  const [value, setValue] = useState(10);
  const [res, setRes] = useState('');


  function handleSubmit(event)
   {
    event.preventDefault();
    const number = parseFloat(num);
    if (value === variants.one)
     {
        setRes(parseInt(number, 2).toString(10));
    } 
    else if (value === variants.two) 
    {
        setRes(parseInt(number, 10).toString(2));
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Число:
        </label>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value) }/>
      <label>в сс</label>
      <select onChange={e =>  setValue(parseInt(e.target.value, 10))}>
          {Object.values(variants).map((variant, index) => (
              <option key={index} value={variant}>
                  {variant}
              </option>
          ))}
      </select>
      <button type="submit">=</button>
    </form>
    <input value={res} readOnly={true} />
    </div>
  );
};

export default NumberBaseConverter;