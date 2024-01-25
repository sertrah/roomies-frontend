import React from "react"

interface propsWithChildren {
    children: React.ReactNode
}


const FieldTitle = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <h6
            className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
        >
            {children}
        </h6>

    )
}

export default FieldTitle