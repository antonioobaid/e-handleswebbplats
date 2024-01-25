// Contacts.jsx
import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Forminput } from "../../components/Forminput";
import { Header } from "../../components/Header";
// import axios from 'axios'

export const Contacts = ({}) => {
  const basestate = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formData, setFormData] = useState(basestate);
  const [formError, setFormError] = useState(basestate);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handelChange = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!validate()) return;
  
  //     try {
  //     // Skicka meddelandet till API:et
  //       console.log('Form Data:', formData)
  //       const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/messages', formData)
  //       console.log('Axios Request:', res.request);

  
  //     if (res.status === 200) {
  //       // Uppdatera tillståndet för att visa att formuläret har skickats
  //       setFormSubmitted(true);
  //     } else {
  //       console.error('Error submitting form. Unexpected status:', res.status);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  //   console.log(formData)
  
  //   // Återställ formuläret och felmeddelanden
  //   setFormData(basestate);
  //   setFormError(basestate);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    try {
      const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Uppdatera tillståndet för att visa att formuläret har skickats
        setFormSubmitted(true);
      } else {
        console.error('Error submitting form. Unexpected status:', response.status);
        console.error('Server response:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  
    // Återställ formuläret och felmeddelanden
    setFormData(basestate);
    setFormError(basestate);
  };
  

  const validate = () => {
    const err = {};

    if (formData.Name.trim() === "") {
      err.Name = "You need to enter a first name";
    } else if (formData.Name.trim().length < 2) {
      err.Name = "Your name must be atleast 2 chars long";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.Email.trim() === "") {
      err.Email = "You need to enter an email address";
    } else if (!emailRegex.test(formData.Email)) {
      err.Email = "Email not valid!";
    }

    if (formData.Message.trim() === "") {
      err.Message = "You need to enter one message";
    }

    setFormError(err);

    return Object.keys(err).length < 1;
  };

  return (
    <div>
      <Header />
      <main className="main-contacts">
        <section>
          <div className="backgroundsbild">
            <img src="\src\assets\images\backgroundbild1.webp" alt="backgroundbild" />
          </div>
        </section>
        <form className="form-contacts" onSubmit={handleSubmit}>
          <div className="form-align">
            <div className=" form-info-">
              <p className="rubrik"> write Something </p>
              <Forminput
                label="Name :"
                onChange={handelChange}               
                value={formData.Name}
                errormsg={formError.Name}
                className="name"
                id="Name"
                type="text"
                name="Name"
                placeholder="Name"
              />
              <Forminput
                label="E-mail :"
                onChange={handelChange}
                value={formData.Email}
                errormsg={formError.Email}
                className="Email"
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
              />

              <label htmlFor="message" className="form-label">
                Message :
              </label>
              <textarea
                name="Message"
                onChange={handelChange}
                value={formData.Message}
                errormsg={formError.Message} 
                id="Message"
                className="form-textarea"
                required
              ></textarea>
              {formError.Message && <p className="Invalid-input">{formError.Message}</p>}

              <button type="submit" className="submit-btn">
                Skicka meddelande
              </button>
            </div>
          </div>
        </form>
        {formSubmitted && <p className="form-submitted">Message sent successfully</p>}
      </main>
      <Footer />
    </div>
  );
};
