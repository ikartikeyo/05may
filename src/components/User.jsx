import React from 'react'

const User = ({ data, onDelete }) => {
  if (!data) return null

  return (
    <div className='pt-20 bg-blue-100 pb-40'>
      <div className='ml-20'>
        <div className='h-20 w-140 border-4 bg-white rounded-2xl ml-3 mt-5 p-2 text-blue-400 flex'>
          <div>
            <img src="https://img.freepik.com/premium-vector/avatar-profile-picture-icon-blue-background-flat-design-style-resources-graphic-element-design_991720-653.jpg?semt=ais_hybrid&w=740" alt="" className='h-15' />
          </div>
          <div className='ml-5'>
            <h3>{data.name}</h3>
            <h3 className='mt-2'>{data.email}</h3>
          </div>
          <div>
            <button type='button' className='text-red-400 ml-50 mt-4' onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
