import React from 'react'
import './contact.css'
import Footer from '../Footer'

export default function Contact() {
  
  const handleClick = () =>{
    alert('Message Sent')
  }

   return (
    <div className='Contact'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form noValidate>
        <div className='user__name'>
          <div>
            <label htmlFor='first_name'>First Name</label><br/>
            <input type='text' id='first_name' placeholder='Enter your first name'/><br/>
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label><br/>
            <input type='text' id='last_name' placeholder='Enter your last name'/>
          </div>
        </div>
        <label htmlFor='email'>Email</label><br/>
        <input id='email' type='email' placeholder='yourname@email.com'/><br/>
        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' type='text' className='input-field' placeholder="Send me a message and I'll reply as soon as possible..." required/><br/>
        <span className="error__message">Please enter a message</span><br/>
        
        <label htmlFor='checkbox'>
          <input type='checkbox' id='checkbox'/>
          You agree to providing your data to Hassanat Busari who may contact you.</label><br/>
        <button type='submit' id='btn__submit' onClick={handleClick}>Send Message</button>
      </form>
      <Footer/>
    </div>
  )
}
