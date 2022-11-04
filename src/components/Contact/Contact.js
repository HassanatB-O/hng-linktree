import React from 'react'
import './contact.css'
import Footer from '../Footer'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function Contact() {
  
  
  // the schema contains the set of rules defined to validate the form
  const schema = yup.object().shape(
    {
      // An error is thrown if the form is submitted and the input fields are empty
      firstname: yup.string().required('Please enter your first name'),
      lastname: yup.string().required('Please enter your last name'),
      email: yup.string().required('Please enter a valid email'),
      textarea: yup.string().required('Please enter a message')
    }
  )

  const {register, handleSubmit, formState: {errors}} = useForm(
    {
      resolver: yupResolver(schema)
    }
  )
  
  const onSubmit = () =>{
    alert('Message Sent')
    document.querySelectorAll("input").forEach(input=>{
      input.value = ""
    })
  }

  return (
    <div className='Contact'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='user__name'>
          <div>
            <label htmlFor='first_name'>First Name</label><br/>
            <input type='text' id='first_name'  placeholder='Enter your first name' {...register("firstname")}/><br/>
            {/* The span contains the error message that is thrown */}
            <span className="error__message">{errors.firstname?.message}</span><br/>
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label><br/>
            <input type='text' id='last_name'  placeholder='Enter your last name' {...register("lastname")} />
            {/* The span contains the error message that is thrown */}
            <span className="error__message">{errors.lastname?.message}</span><br/>
          </div>
        </div>
        <label htmlFor='email'>Email</label><br/>
        <input id='email' type='email' placeholder='yourname@email.com'  {...register("email")}/><br/>
            {/* The span contains the error message that is thrown */}
        <span className="error__message">{errors.email?.message}</span><br/>
        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' type='text' placeholder="Send me a message and I'll reply as soon as possible..." {...register("textarea")}/><br/>
            {/* The span contains the error message that is thrown */}
        <span className="error__message">{errors.textarea?.message}</span><br/>
        
        <label htmlFor='checkbox'><input type='checkbox' id='checkbox'/>You agree to provide your data to Hassanat Busari who may contact you.</label><br/>
        <button type='submit' id='btn__submit'>Send Message</button>
      </form>
      <Footer/>
    </div>
  )
}
