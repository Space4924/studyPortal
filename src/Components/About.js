import React from 'react'

const About = () => {
  return (
    <div><section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Students about Studyportals
        </h1>
        <p class="mb-8 leading-relaxed">‘I started by searching on Google for courses that suites my interest and I was redirected to different websites, 
        one of which is Studyportals.com, which turned out to be the most useful. I chose Vytautas Magnus University because it was the most affordable for me and the course completely suited my needs.
         Studyportals helped by giving me a wide range of detailed options of schools and courses to choose from. I did not have an idea of either the course or the university I wanted to attend.
          At the initial stage, before the application, I received all the necessary 
        information about the course and school, through a direct website link to the course.’ <p> – Angela,  25 years, Nigeria </p></p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More...</button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="pic/pic.png"/>
      </div>
    </div>
  </section></div>
  )
}

export default About