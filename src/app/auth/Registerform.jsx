import React from 'react';
import {useState} from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
//import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

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
        else{
          console.log(result.status);

          console.log("error");
        }

      }





  return (
    <div className="body">
      <Header/>
      <form onSubmit={handelsubmit} method="post" className='register-form'>
      <div className='form-align-register'>
                <div className="form-info--">
                    <p className="title-register">Please Register Your new Account</p>
                </div>

                <div className="form-info--">
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" id="firstName" name="firstName" placeholder='FirstName' />

                  <label htmlFor="lastName">Last Name*</label>
                  <input type="text" id="lastName" name="lastName" placeholder='LastName' />

                  <label htmlFor="streetName">Street Name*</label>
                  <input type="text" id="streetName" name="streetName" placeholder='StreetName'/>

                  <label htmlFor="email">E-mail*</label>
                  <input type="text" id="Email" name="email"
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}
                    placeholder='E-mail'/>

                  <label htmlFor="password">Password*</label>
                  <input type="password" id="password" name="password" 
                  value={password}
                  onChange={(e) => setPassword (e.target.value)}
                    placeholder='password'
                  />

                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder='comfirmPassword' />

                   <label>
                   <input type="checkbox" id="termsAndConditions" name="termsAndConditions" />
                    I have read and accept the terms and agreements.
                   </label>
                </div>
                  
                <div className="form-info--">
                  <button type="submit" className="register-btn"> Register</button>
                 </div>             
            </div>
      </form>
      <Footer/>
    </div>
  );
};
