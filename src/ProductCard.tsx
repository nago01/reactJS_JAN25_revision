import { useState } from "react";

export const ProductCard = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((val)=>{
            return !val;
        });
    }
    return<>
    <div onClick={handleClick}style={{ "border": "2px solid blue", "padding": "2px", "margin": "2px" }}>{item?.title}</div>
    {isOpen && <div>{item.description}</div>}
    </>
}