import { useState } from 'react';

const RegistrationForm = () => {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const handleChange = (e) =>
     {

        const { name, value } = e.target;

        if (name === 'login') 
          {
            setLogin(value);
            setLoginError('');
        } 
        else if (name === 'password')
           {
            setPassword(value);
            setPasswordError('');
        }
         else if (name === 'confirmPassword') 
          {
            setConfirmPassword(value);
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e) => 
      {
        e.preventDefault();

       
        if (login.length === 0) 
          {
            setLoginError("Логин не может быть пустым");
        } 
        else if (!/^([a-z0-9]{6,20})$/.test(login)) {
          setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры");
        }

        if (password.length === 0) {
          setPasswordError("Пароль не может быть пустым");
        }

        if (confirmPassword.length === 0) {
          setConfirmPasswordError('Обязательное поле');
        } 
        else if (password !== confirmPassword) {
          setConfirmPasswordError('Пароли не совпадают');
        }

       

  
    };

    return (
      <div style={{'background':'lightgrey',width:'400px',padding:'10px'}}>
               <form onSubmit={handleSubmit}>
               <h2 style={{'textAlign':'center'}} >Регистрация</h2>

            <div>
                <label>Логин:</label>
                <input type="text" name="login" value={login} onChange={handleChange} />
                 <div style={{'color':'red'}}>{loginError}</div>
            </div>
            <div>
                <label>Пароль:</label>
                <input type="password" name="password" value={password}onChange={handleChange} />
                <div style={{'color':'red'}}>{passwordError}</div>
            </div>
            <div>
                <label>Повтор пароля:</label>
                <input  type="password"  name="confirmPassword" value={confirmPassword}   onChange={handleChange}    />
             <div style={{'color':'red'}}>{confirmPasswordError}</div>
            </div>
            <br></br>
            <button type="submit">Зарегистрироваться</button>
        </form>
        </div>
    );
};

export default RegistrationForm;