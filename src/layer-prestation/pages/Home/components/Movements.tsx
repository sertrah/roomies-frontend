import React from 'react'


const Movement = () => (
  <a href="#" className='w-full'>
    <div
      className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
    >
      <span
        className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
          ></path>
          <path d="M17 17l0 .01"></path>
          <path d="M13 17l0 .01"></path>
          <path d="M15 13l0 -2"></path>
          <path d="M11.75 8.75a4 4 0 0 1 6.5 0"></path>
          <path d="M8.5 6.5a8 8 0 0 1 13 0"></path>
        </svg>
      </span>
      <div className="flex flex-col flex-1">
        <div className='flex justify-between'>
          <h3 className="text-m font-medium">EPM servicios</h3>
          <h3 className="text-m font-medium">$38.000</h3>
        </div>
        <h3 className="text-sm text-gray-500">Harlen Giraldo</h3>
        <div className="divide-x divide-gray-200 mt-2 flex justify-between">
          <span
            className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
          >01 de Enero</span>

          <span
            className="inline-block px-3 text-xs leading-none text-green-400 font-medium first:pl-0"
          >PAID</span>

        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 shrink-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
    </div>
  </a>)

const Movements = () => {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-200">
      <div aria-label="content" className="mt-9 grid gap-2.5 pl-4 pr-4 w-full">
        <Movement />
        <Movement />
        <Movement />
        <Movement />
      </div>
    </div>
  )
}

export default Movements