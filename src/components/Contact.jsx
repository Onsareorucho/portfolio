import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w70mj06', 'template_tfnbg08', form.current, 'GNE7FEkMlt88mhSNM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name='contact' className='w-screen h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       <form ref={form} className='w-screen flex justify-center items-center p-4'  onSubmit={sendEmail}>
        <div className='flex flex-col max-w-[900px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
                </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 ' name="message" rows="10" placeholder='Message'></textarea>
            
            <input type="submit" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' value = "Let's Collaborate" />
           
           
           
        </div>
        </form>
    </div>
  )
}
export default Contact