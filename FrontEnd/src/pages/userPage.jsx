import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const UserPage = () => {

    const { email } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userProducts, setUserProducts] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:3001/users/${email}`);
                if (!res.ok) {
                    throw new Error('User not found');
                }

                const data = await res.json();
                setUser(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [email]);




    useEffect(() => {
        if (!user || !user.id) return;

        const fetchUserProducts = async () => {
            try {
                const res = await fetch(`http://localhost:3001/product/${user.id}`);
                if (!res.ok) throw new Error('Failed to load user products');
                const data = await res.json();
                setUserProducts(data);

            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserProducts();
    }, [user]);

    console.log(userProducts)

    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div id="user-page" className='bg-black text-white flex justify-between px-24 py-8'>
                <h1>Welcome, {user.name}!</h1>
                <p>Email: {user.email}</p>

            </div>
            <div className="grid grid-cols-5 gap-6">
                {Array.isArray(userProducts) && userProducts.map((product) => (
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
            </div>
        </>
    );
};

export default UserPage