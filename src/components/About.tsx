import React from 'react'
// @ts-ignore
import aboutImg from '../assets/about.jpg'

const About = () => {
    return (
        <div id='about' className='text-white max-w-[1200px] mx-auto my-12'>
            <div className='md:grid md:grid-cols-2 sm:py-16'>
                <div className='mt-4 md:mt-0 text-left flex flex-col'>
                    <div className="my-auto mx-6">
                        <h2 className="text-4xl font-bold mb-4 primary-color">About me</h2>
                        <p className='text-base lg:text-lg'>
                            Lorem ipsum dolor sit amet, consectetuer blah blah blah
                        </p>
                    </div>
                </div>
                <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}  alt='About'/>
            </div>
        </div>
    );
}
export default About
