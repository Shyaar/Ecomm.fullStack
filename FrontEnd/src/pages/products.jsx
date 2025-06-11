import React, { useEffect, useState } from 'react'

const ProductsContext = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                setProducts(data); // ✅ store in state
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            {Array.isArray(products) && products.map((product) => (
                <div key={product.id} id={product.id} className="border flex flex-col h-full rounded-2xl">
                    <div id="img" className="h-[140px] w-full my-4">
                        <img src={product.image} alt="product image" className="h-[140px] w-[240px] object-scale-down" />
                    </div>
                    <div className="flex flex-col mx-3">
                        <p className="font-bold h-fit text-nowrap w-full truncate overflow-hidden">{product.name}</p>
                        <p className="w-full text-left">rating: 5-stars</p>
                        <p className="w-full text-left text-blue-800 font-bold">price: {product.price} <span className="text-black/30 font-light">/each</span></p>
                        <div className="flex bg-blue-700">
                            <div className="mx-1">
                                <span className=" text-white flex gap-3 py-1 px-2">
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </span>
                            </div>
                        </div>
                        <p className="w-full text-left text-[15px]">in stock: {product.quantity}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductsContext