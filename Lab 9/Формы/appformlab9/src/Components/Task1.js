import  { useState } from 'react';

const variants = ['Ирк','нск', 'Рио-де-Жанейро'];


function Select() {
 
  const [def, setDefault] = useState("");
  const handleChange=(e)=>
  {
  
    if (variants[e.target.value]==='Рио-де-Жанейро')
        {
            setDefault("Да, это Рио-де-Жанейро!")
          
        }
    else
        {
            setDefault("Нет, это не Рио-де-Жанейро!")
    
        }

  }
  
  return (
    <div>
    <select onChange={e => handleChange(e)}>
        {variants.map((variant, index) => (
            <option key={index} value={index}>
                {variant}
            </option>
        ))}
    </select>

    <p>
        Выбранно: {def}
    </p>
 
    </div>
    );
}
export default Select;