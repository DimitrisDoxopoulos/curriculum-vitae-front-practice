import React from 'react'
import {IProjectImage} from "../interfaces/IProjectImage";

const ProjectImage: React.FC<IProjectImage> =  ({ projectImg, projectImgAlt, key  }) => {
    return (
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group rounded-md flex justify-center
                                    items-center h-[200px] bg-cover relative' key={key}
        >
            <img src={projectImg} alt={projectImgAlt} />
            <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>{projectImgAlt}</span>
                <div className='pt-8 text-center'>
                    <a href='/'>
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProjectImage
