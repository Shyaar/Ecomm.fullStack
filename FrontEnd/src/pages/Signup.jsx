import React from 'react'

function handleRegister(){
    
}

const Signup = () => {
  return (
       <>
            <div>
                <div className='my-10'>
                    <h1 className='font-bold'>Welcome back</h1>
                    <p>please login to see your products!</p>
                </div>

                <form action="POST" className='flex flex-col gap-6 items-center mx-24 my-20'>
                    <div className='grid gap-4'>
                        <label htmlFor="name" className=''>Please enter your name</label>
                        <input type="text" name="name" id="username" placeholder='Enter your name' className='border p-3 rounded-lg' />
                    </div>

                    <div className='grid gap-4'>
                        <label htmlFor="email" className=''>Please enter your name</label>
                        <input type="text" name="email" id="userEmail" placeholder='Enter your email' className='border p-3 rounded-lg' />
                    </div>

                    <div className='grid gap-4'>
                        <label htmlFor="password" className=''>Please enter your name</label>
                        <input type="text" name="password" id="userPassword" placeholder='Enter your password' className='border p-3 rounded-lg' />
                    </div>


                </form>

                <div id="submit">
                    <button onClick={() => handleRegister()} type="submit" className='rounded-2xl bg-blue-400 text-white px-6 py-2'>Submit</button>
                </div>
            </div>
        </>
  )
}

export default Signup