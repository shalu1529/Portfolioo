import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className='w-full h-screen bg-[#051622] text-gray-300 flex justify-center items-center'>
      <div className='max-w-[1000px] w-full'>
        <div className='text-center mb-8 '>
          <p className='text-4xl font-bold border-b-4 border-[#DEB992] inline-block'>
            Education
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='text-left sm:text-right'>
            <p className='text-4xl font-bold'>2016-2017</p>
          </div>
          <div>
            <h3 className='flex items-center'>
              <FaGraduationCap size={30} className='mr-2' />
              High School:
            </h3>
            <p>I have done my 10th in 2017 from J.L Nehru Girls Public School</p>
          </div>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6'>
          <div className='text-left sm:text-right'>
            <p className='text-4xl font-bold'>2018-2019</p>
          </div>
          <div>
            <h3 className='flex items-center'>
              <FaGraduationCap size={30} className='mr-2' />
              Intermediated:
            </h3>
            <p>I have done my 12th in 2019 from Gautam Public School with stream PCM.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6'>
          <div className='text-left sm:text-right'>
            <p className='text-4xl font-bold'>2019-2023</p>
          </div>
          <div>
            <h3 className='flex items-center'>
              <FaGraduationCap size={30} className='mr-2' />
              Graduation:
            </h3>
            <p>
              I am pursuing B.tech in Information Technology from Ims Engineering College. Started in 2019 and complete in 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
