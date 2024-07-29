import React from 'react';
import htmlImage from '../assets/html.png';
import css from '../assets/css.png';
import jS from '../assets/js.png';
import node from '../assets/nodejs.png';
import rec from '../assets/react.png';
import sql from '../assets/sql.png';
import MD from '../assets/mongodb.png';
import BT from '../assets/bootstrap.png';
import TC from '../assets/tailwind.png';




const Skills = () =>{
    return(
    <div name ='skills' className ='bg-[#051622] text-gray-300'>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#DEB992]'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className = 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#ff7300] hover:scale-110 text-center'>
            <img src={htmlImage} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>HTML</p>
            </div>
        
            <div className='shadow-md shadow-[#80afff] hover:scale-110 text-center'>
            <img src={css} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#8080ff] hover:scale-110 text-center'>
            <img src={BT} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>BOOTSTRAP</p>
            </div>

            <div className='shadow-md shadow-[#01ffff] hover:scale-110 text-center'>
            <img src={TC} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>TAILWIND</p>
            </div>


            <div className='shadow-md shadow-[#ffff00] hover:scale-110 text-center'>
            <img src={jS} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>JAVASCRIPT</p>
            </div>
        
            <div className='shadow-md shadow-[#c8e6f8] hover:scale-110 text-center'>
            <img src={rec} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#75c56e] hover:scale-110 text-center'>
            <img src={node} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>NODEJS</p>
            </div>

            <div className='shadow-md shadow-[#d6a985] hover:scale-110 text-center'>
            <img src={sql} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>SQL</p>
            </div>
            <div className='shadow-md shadow-[#435842] hover:scale-110 text-center'>
            <img src={MD} alt="HTML Logo" className="w-20 mx-auto" />
            <p className='my-4'>MongoDB</p>
            </div>
        </div>
     </div>
    </div>
    );
}

export default Skills;
