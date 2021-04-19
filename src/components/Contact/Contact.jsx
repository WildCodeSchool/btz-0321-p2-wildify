import React from 'react';

export default function Contact() {
  return (
    <div className="w-full h-full p-6 pb-20 900:flex 900:flex-row 900:p-10">
      <div className="">
        <h2 className="text-white text-6xl md:font-scada">Help us to make Wizic better</h2>
        <p className="mt-3 text-white text-2xl md:font-scada">Your opinion remain for us, please give a feedback</p>
      </div>
      <form className=" w-full flex flex-col mt-10 900:my-1 900:ml-20">
        <label className="text-white  md:font-scada" htmlFor="name">
          Name:
        </label>
        <input
          className=" p-4 mt-1 h-7 w-full md:font-scada text-white bg-black  bg-opacity-50 rounded-xl focus:outline-none"
          type="text"
          id="name"
          name="name"
        />
        <label className="mt-4 text-white md:font-scada" htmlFor="name">
          Email:
        </label>
        <input
          className=" p-4 mt-1 h-7 w-full md:font-scada text-white bg-black  bg-opacity-50 rounded-xl focus:outline-none"
          type="text"
          id="email"
          name="email"
        />
        <label className="mt-4 text-white md:font-scada" htmlFor="message">
          Message:
        </label>
        <textarea
          className=" p-2 mt-1 h-24 w-full md:font-scada text-white bg-black  bg-opacity-50 rounded-xl focus:outline-none"
          type="text"
          id="message"
          name="message"
        />
        <button
          className=" mt-4 h-10 w-30 md:font-scada text-white rounded-xl  bg-black bg-opacity-50  focus:outline-none  hover:border-mainColor  900:w-36"
          type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
