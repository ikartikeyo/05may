import React, { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import User from './components/User'

const App = () => {
  const [toggler, settoggler] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setFormData(null)
    }
  }

  return (
    <div className='w-screen h-screen bg-blue-100'>
      <main className='w-screen h-screen bg-blue-100'>
        {toggler ? (
          <SignIn toggler={toggler} settoggler={settoggler} />
        ) : (
          <SignUp toggler={toggler} settoggler={settoggler} onsubmit={setFormData} />
        )}

        <img src="trees.png" alt="" className='h-150 absolute left-165' />
        <img src="phone.png" alt="" className='h-150 absolute right-50 mt-10' />
      </main>

      <User data={formData} onDelete={handleDelete} />
    </div>
  )
}

export default App
