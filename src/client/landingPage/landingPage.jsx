import React, { useEffect } from "react";
import  FormSelection  from "../landing/FormSelection/FormSelection";

export const LandingPage = () => {
  const divStyle = {
    backgroundImage: 'url(https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png)',
    height: '100%', // Adjust the height as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <div className="bd" style={divStyle}>
        <FormSelection />
      </div>
    </>
  );
};
