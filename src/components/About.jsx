import React from 'react';

const About =() =>{
    return(
        <div name ='about' className='w-full h-screen bg-[#051622] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#DEB992]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Shalu, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>My name is Shalu, and I hold a Bachelor's degree in Technology with a specialization in Information Technology. As a fresher, I bring a solid foundation in technical knowledge, especially in the MERN stack (MongoDB, Express, React, Node.js) and CSS frameworks like Bootstrap and Tailwind.

My career goal is to excel in web development and become a specialist in creating user-friendly websites.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;