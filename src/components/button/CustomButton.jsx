import React from 'react';

const CustomButton = ({ text, icon, backgroundColor, padding, borderColor, color, onClick }) => {
    return (
        <button 
            onClick={onClick} // Add onClick event handler
            style={{ 
                backgroundColor: backgroundColor || '#1664B8', 
                padding: padding || '16px', 
                border: `1px solid ${borderColor || '#1664B8'}`, 
                color: color || 'white' 
            }} 
            className="flex items-center justify-between gap-5 text-3xl hover:bg-blue-600 py-4 px-16 rounded-xl"
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
}

export default CustomButton;
