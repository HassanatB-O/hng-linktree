import React from 'react'
import './contact.css'
import Footer from '../Footer'

export default function Contact() {
  
   return (
    <form className='Contact' noValidate>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className='user__name'>
          <div>
            <label>First Name</label><br/>
            <input type='text' id='first_name' className='input-field' placeholder='Enter your first name'/><br/>
          </div>
          <div>
            <label>Last Name</label><br/>
            <input type='text' id='last_name' className='input-field' placeholder='Enter your last name'/>
          </div>
        </div>
        <label >Email</label><br/>
        <input id='email' type='email' className='input-field' placeholder='yourname@email.com'/><br/>
        <label>Message</label><br/>
        <textarea id='message' type='text' className='input-field' placeholder="Send me a message and I'll reply as soon as possible..." required/><br/>
        <span className="error__message">Please enter a message</span><br/>
        
        <label>
          <input type='checkbox' id='checkbox'/>
          You agree to providing your data to Hassanat Busari who may contact you.</label><br/>
        <button type='submit' id='btn__submit'>Send Message</button>
      <Footer/>
    </form>
  )
}
