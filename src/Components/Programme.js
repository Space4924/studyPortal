import React from 'react'
// import {Button} from '@mui/material';

const Programme = (props) => {
    return (
        <div className="programme">
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto ">
                        <div class="flex flex-col text-center w-full mb-20 ">
                            <h1 class="sm:text-3xl  text-2xl font-medium title-font mb-4 text-gray-900">{props.heading}</h1>
                        </div>
                        <div class="flex flex-wrap ">
                            <div class="pt-8 px-5 pb-10 md:w-1/3 sm:mb-0 mb-6 bg-gray-100 ">
                                <div class="rounded-lg h-25 overflow-hidden">
                                    <img alt="content" class="course mx-auto object-center h-full w-full text-center" src={props.BI} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900 ">{props.BSH}</h2>
                                <p class="text-base leading-relaxed mt-2">{props.BC}</p>
                                <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                <button class="flex mx-auto  mt-12 text-gray-700 bg-orange-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> </div>
                            </div>
                            <div class="pt-8 px-5 md:w-1/3 sm:mb-0 mb-6 ">
                                <div class="rounded-lg h-25 overflow-hidden">
                                    <img alt="content" class="course mx-auto object-center h-full w-full text-ceter" src={props.MI} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900">{props.MSH}</h2>
                                <p class="text-base leading-relaxed mt-2">{props.MC}</p>
                                <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                    <button class="flex mx-auto  mt-12 text-white-700 bg-orange-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                                </div>
                            </div>
                            <div class="pt-8 px-5 md:w-1/3 sm:mb-0 mb-6 bg-gray-100">
                                <div class="rounded-lg h-25 overflow-hidden">
                                    <img alt="content" class="course mx-auto object-cover object-center h-full w-full" src={props.PI} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900 ">{props.PSH}</h2>
                                <p class="text-base leading-relaxed mt-2">{props.PC}</p>
                                <div class="flex  w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                <button class="flex mx-auto  mt-12 text-gray-700 bg-orange-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </section></div>
        </div>
    )
}

export default Programme