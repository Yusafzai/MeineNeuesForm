import React from 'react';
import './Style.css';

function About() {
    return (
        <div className="Lemon w-full bg-gray-200 lg:mt-72 xl:mt-96 sm:mt-16">
            
          <div className="flex justify-start">
              <h1 className="lg:ml-24 lg:top-20 relative text-5xl font-bold sm:ml-24 sm:mt-2 xl:ml-20 xl:top-16 md:ml-16 md:top-16 sm:text-4xl">About Me</h1>
          </div>

          <div className="flex justify-start">
              <h2 className="text-gray-500 lg:top-24 lg:ml-24 lg:text-2xl relative xl:top-24 xl:ml-20 xl:text-2xl md:top-20 md:ml-16 sm:ml-10">Visual Designer & Front-End Developer,</h2>
          </div>


          <div>
              <h1 className="relative lg:right-50 lg:bottom-56 lg:text-xl lg:mx-8 text-gray-600 sm:text-sm sm:mx-8 sm:mt-2 xl:text-2xl xl:bottom-64 xl:right-50 md:hidden">originally a web dev experiencing different opportunities and   taking the next big step <br/> Webentwickler erleben neue Dinge und unternehmen große Schritte <br/>
              ursprungligen en webbutvecklare som upplever olika möjligheter och tar nästa stora steg <br/> په اصل کې یو ویب دی چې مختلف فرصتونه تجربه کوي او راتلونکی لوی ګام پورته کوي
              </h1>
          </div>

        </div>
    )
}

export default About
