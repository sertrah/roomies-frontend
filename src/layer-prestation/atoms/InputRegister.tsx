import React from "react"

interface propsWithChildren {
    children: React.ReactNode
}


const InputRegister = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <input
            placeholder="username"
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />

    )
}

export default InputRegister