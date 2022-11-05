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
      // An error is thrown if the form is submitted and the input field is empty
      textarea: yup.string().required('Please enter a message')
    }
  )

  const {register, handleSubmit, formState: {errors}} = useForm(
    {
      resolver: yupResolver(schema)
    }
  )
  
  const [border, setBorder] = React.useState(false)

  let inputFields = document.querySelectorAll(".input-field")

  const onSubmit = () =>{
    alert('Message Sent')
    inputFields.forEach(input=>{
      input.value = ""
      setBorder(true)
    })   
    handleChange()
  }

  const handleChange = (e) =>{
    const {value} = e.target
    console.log(value)
    if(value === ''){
      setBorder(true)
    }
  }

   return (
    <div className='Contact'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='user__name'>
          <div>
            <label htmlFor='first_name'>First Name</label><br/>
            <input type='text' id='first_name' className='input-field' placeholder='Enter your first name'/><br/>
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label><br/>
            <input type='text' id='last_name' className='input-field' placeholder='Enter your last name'/>
          </div>
        </div>
        <label htmlFor='email'>Email</label><br/>
        <input id='email' type='email' placeholder='yourname@email.com' className='input-field'/><br/>
        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' type='text' className={border ? 'border__show' : ''} onChange={handleChange} placeholder="Send me a message and I'll reply as soon as possible..." {...register("textarea")} /><br/>
            {/* The span contains the error message that is thrown */}
        <span className="error__message">{errors.textarea?.message}</span><br/>
        
        <label htmlFor='checkbox'>
          <input type='checkbox' id='checkbox'/>
          You agree to provide your data to Hassanat Busari who may contact you.</label><br/>
        <button type='submit' id='btn__submit'>Send Message</button>
      </form>
      <Footer/>
    </div>
  )
}
