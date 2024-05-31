import React from 'react';
import {IIconWithTextProps} from '../interfaces/IIconWithTextProps'

const IconWithText: React.FC<IIconWithTextProps> = ({ src, alt, text }) => {
    return (
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={src} alt={alt} />
            <p className='mt-2'>{text}</p>
        </div>
    );
}

export default IconWithText;
