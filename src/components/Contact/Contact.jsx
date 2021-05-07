import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactPopup from './contactPopup';

export default function Contact() {
  const [isPopup, setIsPopup] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mvp7t8n', 'template_1ql6rpl', e.target, 'user_Cy3IIX3RpbiCfm5rTqCW2').then(
      () => {
        setIsPopup(true);
      },
      (error) => {
        alert(`Something gone wrong`, error.text);
      },
    );
    e.target.reset();
  }

  const handleClick = () => {
    setIsPopup(false);
  };

  return (
    <div className="w-full h-full p-6 900:flex 900:flex-row 900:p-10">
      <div className="flex flex-col pr-12">
        <h2 className="text-white text-4xl 900:text-7xl font-bold md:font-scada">Help us to make Wizic better</h2>
        <p className="mt-3 text-white text-2xl md:font-scada">Your opinion remain for us, please give a feedback</p>
      </div>
      <form className=" w-full flex flex-col mt-10 900:my-1 900:w-4/5 " onSubmit={sendEmail}>
        <div className="absolute z-10">{isPopup && <ContactPopup handleClick={handleClick} />}</div>
        <label className="text-white  md:font-scada" htmlFor="name">
          Name:
        </label>
        <input
          className=" p-2 mt-1 h-7 w-full md:font-scada text-white bg-white  bg-opacity-20 rounded focus:outline-none shadow-searchbar"
          type="text"
          id="name"
          name="name"
        />
        <label className="mt-4 text-white md:font-scada" htmlFor="name">
          Email:
        </label>
        <input
          className=" p-2 mt-1 h-7 w-full md:font-scada text-white bg-white bg-opacity-20 rounded focus:outline-none shadow-searchbar"
          type="text"
          id="email"
          name="email"
        />
        <label className="mt-4 text-white md:font-scada" htmlFor="message">
          Message:
        </label>
        <textarea
          className=" p-2 mt-1 h-24 w-full md:font-scada text-white bg-white bg-opacity-10 rounded focus:outline-none shadow-searchbar"
          type="text"
          id="message"
          name="message"
        />
        <button
          className=" mt-4 h-10 w-30 md:font-scada text-white rounded-xl  bg-white bg-opacity-20  shadow-searchbar  focus:outline-none  hover:border-mainColor  900:w-36"
          type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
