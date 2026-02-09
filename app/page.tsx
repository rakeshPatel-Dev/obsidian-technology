import DemoOne from '@/components/layout/Footer'
import Demo from '@/components/layout/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Demo />
      <h1 className="font-heading fontbo text-6xl">
        Obsidian Technology
      </h1>
      <h1 className="font-heading font-bold text-6xl">
        Obsidian Technology
      </h1>
      <h1 className='text-6xl font-sans h-full'>Obsidian Technology</h1>
      <h1 className='text-6xl font-bold font-sans h-full'>Obsidian Technology</h1>
      <div className='text-6xl font-bold font-sans h-96'>

        <h1 className='text-6xl font-mono'>Obsidian Technology</h1>
      </div>
      <div className='text-6xl font-bold font-sans h-96'>
        <h1 className='text-6xl font-mono'>Obsidian Technology</h1>
      </div>
      <DemoOne />
    </div>
  )
}

export default page
