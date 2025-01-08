"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ImInfo } from 'react-icons/im';
import Link from 'next/link';


const ContactForm = () => {


  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [buttonTitle, setButtonTitle] = useState<string>('Nachricht senden')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setButtonTitle('Danke!')
    e.preventDefault();

    emailjs.send(
      'service_bb5xezm',        // Service ID
      'template_bkuhyzc',       // Template ID
      formData,                 // Form Data
      'g91dwBggINzadA38e'
    ).then(
      () => {
        alert('Nachricht erfolgreich gesendet!');
        setButtonTitle('Nachricht senden')
      },
      () => {
        alert('Fehler beim Senden der Nachricht. Bitte versuche es erneut.');
        setButtonTitle('Nachricht senden')
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center bg-gradient-to-tr
     from-stone-950/40 to-stone-950/10 border border-stone-400/20 rounded-xl pt-5 px-5 pb-12 font-inter hover:scale-[1.01] transition-all"
     style={{ boxShadow: 'inset 0 0 30px 0 rgba(151, 156, 109, 0.08)' }}>
      
<div className='w-full flex justify-center '>
        <h2 className='text-main-10 info pb-8'>Kontaktformular</h2>
        
        </div>
        <div className="mb-8 flex flex-row w-full justify-between">
            <div className='w-1/2 mr-2'>
        <label className="block regular-text opacity-60 mb-2" htmlFor="firstName">
          Vorname
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="appearance-none w-full py-2 px-3 text-main-10 leading-tight focus:outline-none focus:shadow-outline 
          bg-transparent border-b border-stone-400/20"
          required
        />
        </div>

        <div className='w-1/2 '>
        <label className="block regular-text opacity-60 mb-2" htmlFor="lastName">
          Nachname
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="appearance-none w-full py-2 px-3 text-main-10 leading-tight focus:outline-none focus:shadow-outline 
          bg-transparent border-b border-stone-400/20"
          required
        />
        </div>
      </div>

      <div className="mb-8 w-full">
        <label className="block regular-text opacity-60 mb-2" htmlFor="email">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none w-full py-2 px-3 text-main-10 leading-tight focus:outline-none focus:shadow-outline 
          bg-transparent border-b border-stone-400/20"
          required
        />
      </div>

      <div className="mb-12 w-full">
        <label className="block regular-text opacity-60 mb-2" htmlFor="message">
          Nachricht
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none w-full py-2 px-3 text-main-10 leading-tight focus:outline-none focus:shadow-outline 
          bg-transparent border border-stone-400/20 rounded-lg"
          rows= {5}
          required
        />
      </div>

      <div className='flex flex-row gap-3 regular-text opacity-40 items-center mb-8'>
<ImInfo className='text-3xl'/>
<span>
Mit dem Abschicken dieser Nachricht stimmen Sie der <Link href="/datenschutz" className='text-hf-350 underline'>Datenschutzerklärung</Link> zu.
</span>
      </div>

      <div className="flex justify-center items-center w-full">
        <button
          type="submit"
          className="items-center w-full max-w-sm rounded-2xl bg-gradient-to-tr z-20
           px-5 py-2 overflow-hidden hover:opacity-90
          transition buttons-text font-inter no-underline backdrop-blur-md from-main-800/60 to-secondary-900/40 text-main-10/60 border border-main-100/60"
        >
         {buttonTitle}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
