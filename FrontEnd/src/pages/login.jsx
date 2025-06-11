import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {



    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!email || !password) {
            toast.error('Please fill in all fields!');
            return;
        }

        try {
            const loginUser = await fetch(`http://localhost:3001/users/${email}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await loginUser.json();

            if (loginUser.ok) {
                toast.success(`Welcome back ${data.name}! You signed in successfully.`);
                setEmail('');
                setPassword('');
                navigate(`/user/${email}`);


            } else {
                toast.error(data.message || 'Signup failed!');
            }
        } catch (error) {
            toast.error(`Network error: ${error.message}`);
        }
    };
    return (
        <>
            <div>
                <div className='my-10'>
                    <h1 className='font-bold'>Welcome back</h1>
                    <p>please login to see your products!</p>
                </div>

                <form onSubmit={handleSubmit} action="GET" className='flex flex-col gap-6 items-center mx-24 my-20'>

                    <div className='grid gap-4'>
                        <label htmlFor="email" className=''>Please enter your name</label>
                        <input type="text" name="email" id="userEmail" placeholder='Enter your email' className='border p-3 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='grid gap-4'>
                        <label htmlFor="password" className=''>Please enter your Password</label>
                        <input type="text" name="password" id="userPassword" placeholder='Enter your password' className='border p-3 rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div id="submit">
                        <button type="submit" className='rounded-2xl bg-blue-400 text-white px-6 py-2'>Submit</button>
                    </div>
                </form>
                <ToastContainer />



            </div>
        </>
    )
}

export default Login