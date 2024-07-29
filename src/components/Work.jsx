import React from "react";
import Proj from '../assets/proj.png';
import Todo from '../assets/todo.png'
import nu from '../assets/netflixui.png'
import Cafe from '../assets/cafe.png'
import quiz from '../assets/quiz.png'
import { useState } from "react";



const Work = () => {

    const [showDescription, setShowDescription] = useState(false);


    const handleToggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div name='project' className='w-full md:h-screen text-gray-300 bg-[#051622]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font=bold inline border-b-4 text-gray-300 border-[#DEB992]'>Project</p>
                    <p className='py-6'> Check out some of my work</p>
                </div>
                
                 

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${Proj})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {!showDescription && (
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider ml-12'>
                                Opticals Website

                            </span>
                            <div className='pt-10 text-center'>
                                <a href="https://opticals-website.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/shalu1529/Glasses-Website">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>


                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Detail
                                </button>
                            </div>

                            
                        </div>
                    )}

                        {showDescription && (
                            
                            
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-1xl font-bold text-white -tracking-wider block'>
                            Designed a website where customer can add their favorite glasses in the cart and generate a QR code.
                            This QR code can be used to buy opticals from the nearby
company stores.
                           <br></br>
                            key skills- HTML ,CSS , JAVASCRIPT.

                            </span>
                            <br></br>
                            <button onClick={handleToggleDescription} className='text-center rounded-lg px-3 py-2 m-2 ml-20 bg-white text-gray-700 font-bold text-lg '>
                                    Detail
                                </button>
                            </div>
                        
                        )}
                    </div>
                   
 
           



            



                    <div style={{ backgroundImage: `url(${Todo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {!showDescription && (
                        <div className='opacity-0 group-hover:opacity-100'>

                            <span className='text-2xl font-bold text-white -tracking-wider ml-20'>
                                TodoList

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://goal-tracker.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/shalu1529/Todolist">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Detail
                                </button>


                            </div>
                        </div>

                    )}

                    {showDescription && (
                            
                            
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-1xl font-bold text-white -tracking-wider block'>
                                Developed a web-based ToDo list application that helps users organize their tasks and manage their daily activities efficiently.
                               <br></br>
                                key skills- HTML,Tailwind,React,JAVASCRIPT.
    
                                </span>
                                <br></br>
                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-3 py-2 m-2 ml-20 bg-white text-gray-700 font-bold text-lg '>
                                        Detail
                                    </button>
                                </div>
                            
                            )}

                    </div>

                    <div style={{ backgroundImage: `url(${quiz})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {!showDescription && (
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider ml-20'>
                                QUIZ Platform

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://alma-quiz.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/shalu1529/quiz-platform">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Detail
                                </button>
                            </div>
                        </div>

                        )}

{showDescription && (
        
        
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-1xl font-bold text-white -tracking-wider block'>
            Create a quiz platform where user can create as many quiz and play the 
same many more times. 
           <br></br>
            key skills- REACT,Tailwind,Redux.

            </span>
            <br></br>
            <button onClick={handleToggleDescription} className='text-center rounded-lg px-3 py-2 m-2 ml-20 bg-white text-gray-700 font-bold text-lg '>
                    Detail
                </button>
            </div>
        
        )}
                    </div>


                    <div style={{ backgroundImage: `url(${nu})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {!showDescription && (
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider ml-9'>
                                Nextflix-UI-Clone

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://netflix-ui-b7a47.web.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/shalu1529/netflix-ui-clone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Detail
                                </button>
                            </div>
                        </div>
                    )}

                        {showDescription && (
        
        
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-1xl font-bold text-white -tracking-wider block'>
            Developed a Netflix clone with React, MongoDB, and Tailwind CSS, showcasing full-stack development and modern UI design.

           <br></br>
            key skills- Tailwind ,React,Expressjs,mongodb.

            </span>
            <br></br>
            <button onClick={handleToggleDescription} className='text-center rounded-lg px-3 py-2 m-2 ml-20 bg-white text-gray-700 font-bold text-lg '>
                    Detail
                </button>
            </div>
        
        )}
                    </div>

                    <div style={{ backgroundImage: `url(${Cafe})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {!showDescription && (
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white -tracking-wider ml-6'>
                                Cafe-Managment

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://cafe-managment-website.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/shalu1529/Cafe-Management-website">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                                <button onClick={handleToggleDescription} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Detail
                                </button>
                            </div>
                        </div>

                        )}

{showDescription && (
        
        
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-1xl font-bold text-white -tracking-wider block'>
            Designed a cafe Management website which contain 4-5 section -Home,combos,feedback,menu,and login/signup. 
           <br></br>
            key skills- HTML ,CSS , JAVASCRIPT.

            </span>
            <br></br>
            <button onClick={handleToggleDescription} className='text-center rounded-lg px-3 py-2 m-2 ml-20 bg-white text-gray-700 font-bold text-lg '>
                    Detail
                </button>
            </div>
            
        
        )}
</div>
                </div>
            </div>
        </div>
    )
}

export default Work;