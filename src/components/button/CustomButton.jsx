import React from 'react';

const CustomButton = ({ text, icon }) => {
    return (
        <button style={{backgroundColor:'#1664B8'}} className="flex items-center justify-between gap-5 text-3xl  hover:bg-blue-600 text-white   py-4 px-16 rounded-xl">
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
}

export default CustomButton;
