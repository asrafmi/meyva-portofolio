import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {

    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is ${pageInfo?.name}`,
            `Girl who loves sushi`,
            `and loves anything about finance`,
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 items-center justify-center'
                src={urlFor(pageInfo?.heroImage).url()}
                alt="" />
            <div className='z-20'>
                <h2 className='text-sm text-gray-500 pb-2 tracking-[15px] uppercase'>
                    {pageInfo?.role}
                </h2>
                <h1 className='text-5xl  lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#education'>
                        <button className='heroButton'>Education</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}