import React from 'react';

function Login() {
  return (
    <div
      className="flex flex-col w-screen h-screen justify-between p-6 900:px-8 900:pt-8 900:pb-2"
      style={{
        backgroundImage: `url(src/img/BackGrounds/Acceuil.png)`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `left`,
      }}>
      <div className="flex items-center justify-between ">
        <h1 className="font-scada text-white font-bold text-4xl">WIZIC</h1>
      </div>
      <div className="w-full 900:w-4/12 900:ml-36">
        <h1 className="font-scada text-white font-bold text-5xl">Welcome on Wizic, Please Login for use the App !</h1>
        <h2 className="font-scada text-white  text-2xl mt-5 ">Login with GitHub</h2>
        <button
          className="flex items-center bg-bginput shadow-input2 focus:outline-none w-8/12 mt-2 rounded-lg text-sm text-white py-2 px-2 font-scada hover:text-mainColor hover:shadow-input"
          onClick={() => {
            window.open('https://bazify-backend.basile.vernouillet.dev/auth/github', '_self');
          }}>
          <img className="w-6 h-6 mr-3" src="src/img/Icons/github.png" alt="Github" />
          Log with Github
        </button>
      </div>
      <div className="flex w-full justify-between items-end">
        <div className="h-16 900:h-14">
          <h2 className="font-scada font-bold text-white text-xl 900:text-sm">Made by Happy Wilders</h2>
          <a className="font-cuprum text-white text-sm" href="https://www.wildcodeschool.com/fr-FR">
            @WildCodeSchool
          </a>
        </div>
        <img className="w-16 h-16 900:w-14 900:h-14" src="src/img/LogoWild.png" alt="LogoWild" />
      </div>
    </div>
  );
}

export default Login;
