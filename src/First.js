import React from 'react';
import './Style.css';
import Typical from 'react-typical';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function First() {
    return (
        <div>

           <div className="flex justify-center">
               <h1 className="TextOne font-bold text-8xl mt-32 md:text-7xl xl:text-9xl sm:text-6xl sm:mx-20">I'm Gefahr Yousafzai.</h1>
           </div>

           <div className="flex justify-center">
               <h2 className="text-2xl mt-8 sm:font-semibold xl:font-semibold">Creative Designer & Developer located On The Internet.</h2>
           </div>

           <div>
               <h3 className="text-2xl">I'm a {'  '} 
               <Typical 
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                      'Developer.',
                      1100,
                      'Designer UI/UX.',
                      1100,
                      'Freelancer.',
                      1100
                  ]}
               />
               </h3>
           </div>

           <div className="flex justify-center mt-6">
           <a href="https://www.instagram.com/itsgefahr/"><InstagramIcon style={{ fontSize: 40 }} /></a>
           <a href="https://www.linkedin.com/in/itsyusfzai/"><LinkedInIcon style={{ fontSize: 40 }} /></a>
           <a href="https://twitter.com/Keliph1"><TwitterIcon style={{ fontSize: 40 }} /></a>
           <a href="https://www.youtube.com/ItsYusafzai"><YouTubeIcon style={{ fontSize: 40 }} /></a>
           </div>

        </div>
    )
}

export default First
