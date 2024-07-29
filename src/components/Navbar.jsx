import React from 'react';
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa';
import {useState} from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Navbar = () => {
   const [nav,setNav] = useState(false);
   const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#051622] text-[#1BA098]'>
          <div>
            <h1 className=' text-5xl font-signature ml-2'>Portfolio</h1>
          </div>
          
          <div>
            
            <ul className='hidden md:flex'>
                
                 <li>
                <Link to="home" smooth={true} duration={500} >
                 Home
                 </Link>
                 </li>
                 <li>
                <Link to="about" smooth={true} duration={500} >
                 About
                 </Link>
                 </li>
                 <li>
                <Link to="skills" smooth={true} duration={500} >
                 Skills
                 </Link>
                 </li>
                 <li>
                <Link to="project" smooth={true} duration={500} >
                 Projects
                 </Link>
                 </li>
                 <li>
                <Link to="contact" smooth={true} duration={500} >
                 Contact
                 </Link>
                 </li>

            </ul>
        
            </div>  
            <div onClick = {handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            <div className= {!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            
            <ul>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                 Home
                 </Link>  
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                 About
                 </Link>   
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                 Skills
                 </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="project" smooth={true} duration={500} >
                 Projects
                 </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                 Contact
                 </Link>
                </li>

            </ul>
        
            </div>  
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href ="https://www.linkedin.com/in/shalu-b81816212/">
                    Linkedin <FaLinkedin size ={30}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href ="https://github.com/shalu1529">
                    Github <FaGithub size ={30}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href ="mailto:shaalu1529@gmail.com">
    
                    Email <HiOutlineMail size ={30}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
            
                href={process.env.PUBLIC_URL + '/Shalu_ Resume..pdf'} 
                target = "_blank"
                rel="noopener noreferrer" >
                 Resume 
                 <span className=" group-hover:scale-125 duration-200 ml-2 "></span>
                 <BsFillPersonLinesFill size ={30}/>
                </a>
                </li>
            </ul>
            </div>
         
        </div>
    )
}
export default Navbar;