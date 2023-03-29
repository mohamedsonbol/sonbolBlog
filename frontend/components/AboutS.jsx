import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutS() {
    return (
        <div className="mt-14">
            <div className='max-w-7xl px-6 lg:px-8'>
                <div className=''>
                    <Image src='/logo.png' width='250' height='250' className=' mx-auto rounded-full' />
                </div>
                <div className=''>
                    <h1 className="text-3xl">Mohamed Sonbol</h1>
                    <h3 className="mt-2">Hello, I'm Mohamed. I'm a JavaScript web developer. You can contact me on <Link className='text-panda' href='https://www.linkedin.com/in/mohamedsonbol/'>LinkedIn</Link> Or <Link className='text-panda' href='https://mostaql.com/u/M177'>Mostaql</Link>.</h3>
                </div>
            </div>
        </div>
    )
}