import React from 'react';

export default function Contact() {
  return (
    <div className="px-14 w-full h-full flex  ">
      <div className="py-24 px-8 w-6/12 h-full flex flex-col align-middle justify-center items-center">
        <h2 className="text-gray-400 text-6xl md:font-scada">Help us to make Wizik better</h2>
        <p className="text-gray-400 text-2xl md:font-scada">You&apos;re opinion remain for us, please give a feedback</p>
      </div>
      <div className="px-12 w-6/12 h-full flex flex-col align-left items-left justify-center">
        <label className="text-white md:font-scada" htmlFor="name">
          Name:
        </label>
        <input className=" md:font-scada text-white w-7/12 bg-black opacity-20 rounded-2xl" type="text" id="name" name="name" />
        <label className="text-white md:font-scada" htmlFor="name">
          Email:
        </label>
        <input className="md:font-scada text-white w-7/12 bg-black opacity-20 rounded-2xl" type="text" id="email" name="email" />
        <label className="text-white md:font-scada" htmlFor="message">
          Message:
        </label>
        <input className="md:font-scada text-white h-1/5  w-9/12 bg-black opacity-20 rounded-lg" type="text" id="message" name="message" />
      </div>
    </div>
  );
}
