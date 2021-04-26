import React, { useState } from 'react';
import HomepageForm from './homepageForm';
import Homepage1 from './hompage1';

function Homepage() {
  const [isSwitch, setIsSwitch] = useState(true);

  const handleclick = () => {
    setIsSwitch(false);
  };

  const backclick = () => {
    setIsSwitch(true);
  };

  return <div>{isSwitch ? <Homepage1 handleclick={handleclick} /> : <HomepageForm backclick={backclick} />}</div>;
}

export default Homepage;
