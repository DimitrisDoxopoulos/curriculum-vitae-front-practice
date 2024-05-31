import React from 'react'
// @ts-ignore
import html from '../assets/html.png'
// @ts-ignore
import css from '../assets/css.png'
// @ts-ignore
import javascript from '../assets/javascript.png'
// @ts-ignore
import tailwind from '../assets/tailwind.png'
// @ts-ignore
import react from '../assets/react.png'
import IconWithText from "./SkillsImage";

const Skills = () => {
    return (
        <div
            className='
                border border-gray-600
                bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                place-items-center md:flex md:justify-between md:items-center
            '
        >
            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
                my <br /> Tech <br /> Stack
            </h2>

            <IconWithText src={tailwind} alt='Tailwind Logo' text='Tailwind' />
            <IconWithText src={html} alt='HTML Logo' text='HTML' />
            <IconWithText src={css} alt='CSS Logo' text='CSS' />
            <IconWithText src={javascript} alt='JavaScript Logo' text='JavaScript' />
            <IconWithText src={react} alt='ReactJS Logo' text='ReactJS' />

        </div>
    )
}
export default Skills
