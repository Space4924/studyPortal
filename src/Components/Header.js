import React from 'react'

const Header = () => {
    return (

        <header class="text-gray-600 body-font header">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <img alt="team" class="logo" src="http://monet-prtl-co.imgix.net/StyleGuide/Logos/RestrictionsComposition.png" />

                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div class="mr-5 text-red-800 hover:text-gray-900">About</div>
                    <div class="mr-5 text-red-800 hover:text-gray-900">For Institution</div>
                    <div class="mr-5 text-red-800 hover:text-gray-900">Carrer</div>

                    <div class="mr-5 text-red-800 hover:text-gray-900">News & Insight</div>
                    <div class="mr-5 text-red-800 hover:text-gray-900">Initiative</div>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-8 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    
                </button>
            </div>
        </header>
    )
}

export default Header