import React from 'react'
import { useForm } from 'react-hook-form'

const SignUp = ({ toggler, settoggler, onsubmit }) => {
  const { register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    onsubmit(data)
    reset()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className='absolute top-15 left-20 w-140 h-140 bg-yellow-200 rounded-xl'>
        <h1 className='text-white text-5xl font-extrabold font-sans mt-5 ml-5'>Let's Start the Journey</h1>
        <input type="text" placeholder='John Doe' {...register('name')} className='bg-pink-600 border-3 h-15 w-100 ml-18 mt-10 p-5 rounded-xl outline-none text-white' />
        <br />
        <input type="email" placeholder='JohnDoe@example.com' {...register('email')} className='bg-pink-600 border-3 h-15 w-100 ml-18 mt-10 p-5 rounded-xl outline-none text-white' />
        <br />
        <input type="password" placeholder='**********' {...register('password')} className='bg-pink-600 border-3 h-15 w-100 ml-18 mt-10 p-5 rounded-xl outline-none text-white' />
        <br />
        <button className='mt-10 ml-18 bg-sky-300 h-13 w-30 rounded-xl text-white text-lg border-3 hover:bg-green-400 active:scale-105'>Sign Up</button>
        <br />
        <div className='flex'>
          <p className='mt-5 ml-18'>Already have an account?</p>
          <button type='button' className='mt-5 ml-2 text-base text-blue-800' onClick={() => settoggler(!toggler)}>Sign In</button>
          <img src="grass.png" alt="" className='h-60 absolute top-84 left-82' />
        </div>
      </form>
    </div>
  )
}

export default SignUp
