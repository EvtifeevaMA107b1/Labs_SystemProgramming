import  { useState } from 'react';
function BackButton()
{   
    const [isRed, setIsRed] = useState(true);

    let color='';
    if (isRed)
    {
        color='red'
    }
    else{
        color='green'
    }
    const handleClick = () => {
        setIsRed(!isRed);
     
    };

    return(
        <button onClick={handleClick} style={{'backgroundColor': color}}>Тык </button>
       
    );
}
export default BackButton