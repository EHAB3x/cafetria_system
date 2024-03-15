import { useEffect } from "react";
import { FaPalette } from "react-icons/fa";
import "./palette.css"

const Palette = () => {

    useEffect(()=>{
        const palette = document.querySelector('.palette');
        const spans = palette.querySelectorAll('span');
        const toggle = palette.querySelector('.palette .toggle');

        toggle.addEventListener("click",()=>{
            palette.classList.toggle("active");
        })
    
        spans.forEach(span => {
        const color = span.dataset.color;
            if (color) {
                span.style.backgroundColor = color;
            }
            span.addEventListener("click",()=>{
                const rootElement = document.documentElement;
                rootElement.style.setProperty('--primary-color', color); 
            })
        });

    },[])
  return (
    <div className="palette">
        <div className="toggle"><FaPalette /></div>
        <span data-color="#1664B8"></span>
        <span data-color="#255946"></span>
        <span data-color="#BF6B04"></span>
        <span data-color="#8C5230"></span>
        <span data-color="#111827"></span>
    </div>
  )
}

export default Palette