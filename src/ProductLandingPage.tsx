import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductLandingPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => {
            return res.json()
        }).then((res2) => {
            setData(res2.products);
        });
    }, []);
    console.log(data, 'data');
    return <div>Product Landing Page
        {
            data.map((item) => {
                return <ProductCard item={item}/>
            })
        }
    </div>
}