"use client"
import React, { useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const page = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sy7uveh', // Replace with your EmailJS service ID
        'template_zt6i1gb', // Replace with your EmailJS template ID
        formRef.current,
        'MB0zaOz-ahk-D-D5D' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='h-full bg-secondary/30 '>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-4 '>
            Let's <span className='text-[#9d0c2e]'>Connect.</span>
          </h2>

          {!isSubmitted ? (
            <form ref={formRef} onSubmit={sendEmail} className='flex-1 flex flex-col gap-6 w-full mx-auto '>
              <div className='flex gap-x-6 w-full'>
                <input type='text' name='name' placeholder='Name' className='input' required />
                <input type='email' name='email' placeholder='Email' className='input' required />
              </div>
              <input type='text' name='subject' placeholder='Subject' className='input' required />
              <textarea name='message' placeholder='Message' className='textarea' required></textarea>
              <button
                type='submit'
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-[#9d0c2e] group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
                <BsArrowRight
                  className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
                />
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <h3 className='text-xl text-green-500'>Thank you for your message!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
