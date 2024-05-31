import React from 'react'
// @ts-ignore
import proj1 from '../assets/proj1.png'
// @ts-ignore
import proj2 from '../assets/proj2.png'
// @ts-ignore
import proj3 from '../assets/proj3.png'
// @ts-ignore
import proj4 from '../assets/proj4.png'
// @ts-ignore
import proj5 from '../assets/proj5.png'
// @ts-ignore
import proj6 from '../assets/proj6.png'
import ProjectImage from "./ProjectImage";

const Work = () => {
    const workImagesArray = [proj1, proj2, proj3, proj4, proj5, proj6];
    return (
        <div id='work' className='max-w-[1200px] mx-auto p-5'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
                <p className='text-gray-400'>Check out some of my projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {workImagesArray.map((item, index) => {
                    return <ProjectImage projectImg={item} projectImgAlt={'Project ' + (index + 1)} key={index} />
                })}
            </div>
        </div>
    )
}
export default Work
