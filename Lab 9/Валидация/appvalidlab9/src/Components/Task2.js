import { useState } from 'react';

const ProfileChange = () => {
   
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
   
    const [fatherName, setFatherName] = useState("");
    const [fatherNameError, setFatherNameError] = useState("");
   
    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState("");
   
    const [bDay, setBDay] = useState("");
    const [bDayError, setBDayError] = useState("");
    
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");


    const handleChange = (e) =>
     {

        const { name, value } = e.target;

        if (name === 'name') 
          {
            setName(value);
            setNameError('');
        } 
        else if (name === 'fatherName')
           {
            setFatherName(value);
            setFatherNameError('');
        }
         else if (name === 'fullName') 
          {
            setFullName(value);
            setFullNameError('');
        }
        else if (name === 'bDay') 
            {
              setBDay(value);
              setBDayError('');
          }
          else if (name === 'address') 
            {
              setAddress(value);
              setAddressError('');
          }
    };

    const handleSubmit = (e) => 
      {
        e.preventDefault();

       
        if (name.length === 0) 
          {
            setNameError("Заполните поле");
        } 
         if (fatherName.length === 0) 
            {
              setFatherNameError("Заполните поле");
          } 
         if (fullName.length === 0) 
            {
              setFullNameError("Заполните поле");
            }

            if (bDay.trim() !== '' && !/^\d{2}\.\d{2}\.\d{4}$/.test(bDay)) {
               setBDayError( 'Дата рождения должна быть в формате ДД.ММ.ГГГГ');
            }

  
    };

    return (
      <div style={{'background':'lightgrey',width:'400px',padding:'10px'}}>
               <form onSubmit={handleSubmit}>
            <div>
                <h2 style={{'textAlign':'center'}} >Редактирование профиля</h2>
                <label>Имя:</label>
                <input type="text" name="name" value={name} onChange={handleChange} />
                 <div style={{'color':'red'}}>{nameError}</div>
            </div>
            <div>
                <label>Отчество:</label>
                <input type="text" name="fatherName" value={fatherName}onChange={handleChange} />
                <div style={{'color':'red'}}>{fatherNameError}</div>
            </div>
            <div>
                <label>Фамилия:</label>
                <input type="text" name="fullName" value={fullName}onChange={handleChange} />
                <div style={{'color':'red'}}>{fullNameError}</div>
            </div>
            <div>
                <label>День Рождения:</label>
                <input type="text" name="bDay" value={bDay}onChange={handleChange} />
                <div style={{'color':'red'}}>{bDayError}</div>
            </div>
            <div>
                <label>Адрес:</label>
                <input type="text" name="address" value={address}onChange={handleChange} />
                <div style={{'color':'red'}}>{addressError}</div>
            </div>
            <br></br>
            <button type="submit">Сохранить</button>
        </form>
        </div>
    );
};

export default ProfileChange;