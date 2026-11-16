import React from 'react'

const FloatingBtn = ({ Astro }: any) => {
    return (

        <div className="relative" >

            <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                      fixed bottom-0 right-0 right-5 rounded-lg
                      mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
                onClick={() => { window.location.href='/bill/create' }}>
                <div className="p-3 rounded-2xl border-white bg-white shadow-md">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                        fill="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title />
                        <g id="Complete">
                            <g data-name="add" id="add-2">
                                <g>
                                    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5" />
                                    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

            </button>
        </div>)
}

export default FloatingBtn