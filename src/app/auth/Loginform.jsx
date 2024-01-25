import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const Loginform = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const navigate = useNavigate();


      const handelsubmit = async (e) => {
        e.preventDefault();

        const result = await fetch ( 'https://js2-ecommerce-api.vercel.app/api/auth/login',{
          method:'post',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify({email,password})
        });

        if(result.status === 201){
            const data = await result.json();
             console.log(data);
             console.log(result.status);
            // navigate('/Loginform', {replace: true})
        }
        else if(result.status === 400)
        {
          console.log(result.status);
          console.log(data);
          console.log(result);
          
        }
        else{
          console.log(result.status);

          console.log("error");
        }

      }




  return (
    <div className="body">
      <Header/>
      <form className="form-login">
        <div className="form-align-login">
          <div className='form-info'>
            <p className='login-paraghraf'> Login </p>
            <label htmlFor="Name"> Name : </label>
            <input type="text" id="Name" name="Name" placeholder='Name' />
          </div>
          <div className='form-info'>
            <label htmlFor="Email"> E-mail : </label>
            <input type="text" id="email" name="email" placeholder='E-mail' />
          </div>
          <div className='form-info'>
            <button type="submit" className="login-btn">
              Logga in
            </button>
          </div> 
          <div className='form-info'>   
            <a href="./Registerform" className="skapa-konto">Skapa ett kundkonto</a>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
  );
};
