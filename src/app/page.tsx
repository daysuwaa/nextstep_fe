import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-4xl text-center p-10 font-semibold'>Landing page</h1>
      <Link href ='/auth/login' className='border rounded-lg p-3'>Login</Link>
      <Link href= '/auth/register' className='border rounded-lg p-3'>Register</Link>
    </div>
  )
}

export default page