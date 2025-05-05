import React from 'react'

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 text-white p-10'>
      <form className='w-[40%] mx-auto'>
        <h1 className='text-5xl font-black mb-7'>Let's Start the Journey</h1>
        <input type="text" 
        placeholder="John Doe"
        className='block mb-5 outline-0 font-thin border-b p-2 w-full text-2xl' />
        <input type="email" 
        placeholder="johndoe@example.com"
        className='block mb-5 outline-0 font-thin border-b p-2 w-full text-2xl' />
        <input type="password" 
        placeholder="********"
        className='block mb-5 outline-0 font-thin border-b p-2 w-full text-2xl' />


        
        <button className='h-10 w-20 border-1 rounded hover:bg-white-200 '>SignUp</button>
        <br />
      <small>ALready have an account ? 
        {" "}
        <button type='button'>SignIn
          </button></small>
          </form>

    </div>
  )
}

export default App
