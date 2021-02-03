import React from 'react';
import './Style.css';
import G from './GL.png';

function Navbar() {
    return (
        <div>
            
         <div className="flex justify-start">
             <a href="/"><img className="w-24 ml-4 mt-4" src={G} alt="Letter G"/></a>
         </div>

        </div>
    )
}

export default Navbar
