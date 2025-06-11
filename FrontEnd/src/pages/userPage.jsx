import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const UserPage = () => {

    const { email } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id="user-page" className='bg-black text-white flex justify-between px-24 py-8'>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>


        </div>
    );
};

export default UserPage