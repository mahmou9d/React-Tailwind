import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <div className="container">
        <div className="w-[800px] max-w-full mx-auto element-center flex-col pt-[250px] sm:pt-[100px]  relative z-20">
          <img
            src="./images/landing-img.png"
            alt="landing"
            draggable={false}
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="text-center my-[30px] ">
          <h1 className="text-white text-[30px] md:text-[40px] font-semibold mb-[15px]">
            All your files in one secure location,
            <br />
            accessible anywhere
          </h1>
          <p className="text-white font-normal text-md px-[15px] md:w-[600px] md:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
            nulla impedit commodi.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="btn element-center text-white w-[280px] h-[60px] rounded-[50px]"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="./images/bg-curvy-desktop.svg"
          className="w-full h-full "
        />
      </div>
    </section>
  );
}

export default Landing
