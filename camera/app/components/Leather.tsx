import React from 'react'
import Lens from './Lens'
import Tag from './Tag'
import Switch from './Switch'

const Leather = () => {
  return (
    <div
      className='flex flex-col h-[40rem] w-[23rem] rounded-3xl border-2 border-black'
      style={{
        backgroundColor: '#92400e',
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px),
          radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px),
          radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '4px 4px, 5px 5px, 6px 6px',
        backgroundPosition: '0 0, 2px 2px, 1px 3px'
      }}
    >
      {/* Top tag */}
      <div className='flex justify-end'>
        <Tag />
      </div>

      {/* Center lens */}
      <div className='flex justify-center items-center mt-22'>
        <Lens />
      </div>

      {/* Switch at the bottom right */}
      <div className='flex flex-col mt-5 items-end'>
        <Switch />
      </div>
    </div>
  )
}

export default Leather
