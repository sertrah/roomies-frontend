import React from 'react'

const Bill = () => {
  return (
      <div className="bg-[#cc0] w-full flex flex-row py-8 px-4 rounded-lg shadow-xl space-x-0">
        <div className="w-full flex flex-col items-center justify-center">
          <figure className="w-semi-full  rounded-full overflow-hidden">
            <img src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman wearing a headwrap and an Africa-shaped earring while smiling" />
          </figure>
        </div>
        <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-left text-2xl font-bold text-gray-900">EPM services</h1>
            <p className="text-gray-700 font-normal leading-6 w-full text-base">El ciclo termina el <br/><span className='text-red-800'>31 de enero</span></p>
          </div>

          <ul className="mt-4 flex flex-col justify-center w-full mb-4">
            <li className="text-sm text-red-800 flex justify-between"> <span>Pending</span> <strong className="text-red-900">$70.000</strong></li>
            <li className="text-sm text-green-800 flex justify-between"> <span>Paid</span> <strong className="text-green-900">$10.000</strong></li>
          </ul>
          <button className="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900">
            Pay
          </button>
        </div>
      </div>
  )
}

const Bills = () => {
  return (
    <section className='w-full pl-4 pr-4'>
      <h2>Bills</h2>
      <div className='w-full'>
        <Bill />
      </div>
    </section>
  )
}

export default Bills