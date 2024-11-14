import React from 'react'
import avtar2 from '../../assets/aboutme.png'

const AboutMe = () => {
    return (
        <div className='bg-[#b5ebe8] h-auto w-full overflow-hidden'>

            <div className='text-white flex w-full justify-between p-10 md:px-20 md:py-16'>
                <div className='md:w-2/4 md:pt-0'>
                    <img className=' pl-0 w-full p-16' src={avtar2} alt="Avatar2" />
                </div>
                <div className='md:w-2/4 '>
                    <p className='text-sm text-black md:text-sm tracking-tight'>
                        <b>About Me</b>
                    </p>
                    <h3 className=' my-2 md:text-2xl font-bold flex leading-normal tracking-tighter'>
                        I am a Passionate Web Developer
                    </h3>
                    <p className='text-sm md:text-sm tracking-tight'>
                        Obviously I am a Web Designer. Web Developer with over 7 years of the best experience. Experienced with all stages of the development cycle for ourself dynamic web projects. The as opposed to using Content here, content here, making it look like readable English.
                    </p>
                    <h3 className=' my-2 md:text-2xl font-bold flex leading-normal tracking-tighter'>Smart Work</h3>
                    <p className='text-sm md:text-sm tracking-tight'>
                        A part of the team that has built the front-end for an enterprise-level web application in ReactJS. I've been a part of a team that has built.
                    </p>
                    <h3 className=' my-2 md:text-2xl font-bold flex leading-normal tracking-tighter'>Modern Work</h3>
                    <p className='text-sm md:text-sm tracking-tight'>
                        I've worked with a wide range of technologies, including MS SQL Server and Python. One of my favorite characteristics of an employer is their passion for the work they are doing.
                    </p>


                </div>
            </div>
            <dir className="flex justify-between p-5 md:p-20 ">
                <button className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  '>
                    <div>
                        <h4><b>2+ <br /> Years Experience</b></h4>

                    </div>
                </button>
                <button className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  '>
                    <div>
                        <h4><b>10+ <br /> Project Down</b></h4>

                    </div>
                </button>
                <button className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  '>
                    <div>
                        <h4><b>15+ <br /> Heppy Client</b></h4>

                    </div>
                </button>
                <button className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  '>
                    <div>
                        <h4><b>15+ <br />Get Awards</b></h4>

                    </div>
                </button>
            </dir>
            <div>
                <center>
                    <p className='text-sm text-black md:text-sm tracking-tight'>
                        <b>Hobbies</b>
                    </p>
                    <h4 className='text-white font-bold leading-normal tracking-tighter'>
                        Things I Love to Do ...
                    </h4>
                </center>
                <div className='flex justify-between p-2 md:p-2 '>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Cricket</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Coding</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Teaching</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Music</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Movies</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Tea</h4></center>
                    </div>
                    
                </div>
                <div className='flex justify-between p-2 md:p-2 '>

                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Writing</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Reading</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Gaming</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Swimming</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Dancing</h4></center>
                    </div>
                    <div className='w-[9rem] h-[3rem] rounded-[1.125rem] pt-3 bg-blue-950 text-white  '>
                        <center> <h4>Cooking</h4></center>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default AboutMe