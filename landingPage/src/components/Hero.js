import React from "react";
import face from "../asserts/face.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className=" h-screen w-full centered flex-col uppercase text-white">
          <div className="bg-white centered w-32 h-32 rounded-full">
            <img src={face} alt="image" className="w-28 h-28 rounded-full" />
          </div>
          <p className="mt-4 font-bold">My name is </p>
          <p className="text-5xl font-bold border-b pb-2 ">John dough</p>
          <p className="text-2xl">photographer, designer, coder</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
