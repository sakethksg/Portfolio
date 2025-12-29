import AboutDetail from '@/components/AboutDetails'
import DitherBackground from '@/components/DitherBackground'
import React from 'react'

const page = () => {
  return (
    <>
      <DitherBackground />
      <div>
        <main className='min-h-screen flex flex-col mt-8 px-4'>
          <AboutDetail />
        </main>
      </div>
    </>
  )
}

export default page
