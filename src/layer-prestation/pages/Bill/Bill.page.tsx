import React from 'react'

const BillPage = () => {
    return (<div id="web3forms__widget"  >
        <div
            id="w3f__widget--content"
            className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md"
        >
            <div className="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
                <h3 className="text-lg text-white">How can we help?</h3>
                <p className="text-white opacity-50">We usually respond in a few hours</p>
            </div>
            <div className="bg-gray-50 flex-grow p-6">
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    id="form"
                    className="needs-validation"
                    noValidate
                >

                    <div className="mb-4">
                        <label
                            htmlFor="full_name"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >Name Bills</label>
                        <input
                            type="text"
                            name="name"
                            id="full_name"
                            placeholder="John Doe"
                            required
                            className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                        />
                        <div
                            className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                        >
                            Please provide your full name.
                        </div>
                    </div>


                    <div className="mb-4">
                        <label
                            htmlFor="full_name"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >Total amount</label>
                        <input
                            type="text"
                            name="name"
                            id="full_name"
                            placeholder="John Doe"
                            required
                            className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                        />
                        <div
                            className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                        >
                            Please provide your full name.
                        </div>
                    </div>
                    <div className='mb-4'>

                        <div className="p-10 bg-gray-100">
                            <div className="max-w-md mx-auto">
                                <label htmlFor="select" className="font-semibold block py-2">Select periodo de pago</label>

                                <div className="relative">
                                    <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                                        <input value="Javascript" name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" checked />

                                        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
                                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                        <label htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
                                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                            </svg>
                                        </label>
                                    </div>

                                    <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
                                    <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
                                        <div className="cursor-pointer group">
                                            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
                                        </div>
                                        <div className="cursor-pointer group border-t">
                                            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
                                        </div>
                                        <div className="cursor-pointer group border-t">
                                            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
                                        </div>
                                        <div className="cursor-pointer group border-t">
                                            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Description
                        </label>

                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            required
                        ></textarea>
                        <div
                            className="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                        >
                            Please enter your message.
                        </div>
                    </div>
                    <div className="mb-3">
                        <button
                            type="submit"
                            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                        >
                            Send Message
                        </button>
                    </div>
                    <p className="text-xs text-center text-gray-400" id="result">
                        <span>Powered by <a href="https://Web3Forms.com" className="text-gray-600" target="_blank" rel="noopener noreferrer">Web3Forms</a></span>
                    </p>
                </form>


            </div>
        </div>

    </div>

    )
}


export default BillPage