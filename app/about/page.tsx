import React from 'react'

function page() {
  return (
    <div>
      <div className='h-96 w-full relative'>
        <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='w-full h-full object-cover absolute mix-blend-overlay' />
        <div className="py-40 flex justify-center items-center">
          <h1 className='text-white text-6xl font-bold'>About VIIE</h1>
        </div>
      </div>
    </div>
  )
}

export default page