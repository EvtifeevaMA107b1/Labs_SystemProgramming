import  { useState } from 'react';
const variants = {
    ADD: '+',
    SUBSTRACT: '-',
    DIVIDE: '/',
    MULTIPLY: '*'
};
function Cal() {
    const [value, setValue] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [err, setErr] = useState('');
    const [res, setRes] = useState(0);
    function handeChange(event) {
        setNum1(event.target.value);
    }
    function handeChange2(event) {
        setNum2(event.target.value);
    }
    function handleSubmit(event) {
        setErr('');
        event.preventDefault();
        setRes(res)
        if (value === variants.ADD) {
            setRes(Number(num1)+Number(num2));
        }
        else if(value === variants.SUBSTRACT) {
            setRes(Number(num1)-Number(num2));
        }
        else if(value === variants.MULTIPLY) {
            setRes(Number(num1)*Number(num2));
        }
        else if(value === variants.DIVIDE) {
            if (num2!=0)
            {
                setRes(Number(num1)/Number(num2));

            }
            else{
                setErr('Делить на ноль нельзя!');
            }
            
        }
    }
    return <>
    <form onSubmit={handleSubmit}>
     
      
       <input type="number" value={num1} onChange={handeChange} />
      <select onChange={e => setValue(e.target.value)}>
          {Object.values(variants).map((variant, index) => (
              <option key={index} value={variant}>
                  {variant}
              </option>
          ))}
      </select>
      <input type="number" value={num2} onChange={handeChange2} />
      
      <button type="submit">=</button>
    </form>
    <input value={res} readOnly={true} />
    <p>{err}</p>
    </>;
    
  }
  
 

export default Cal;