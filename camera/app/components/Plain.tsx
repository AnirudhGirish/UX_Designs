import React from 'react'
import Flash from './Flash'
import Button from './Button'
import Square from './Square'
import Logo from './Logo'

const Plain = () => {
  return (
    <div className='flex flex-col gap-30 items-center h-[40rem] mr-5'>
      <div className='flex flex-col items-center'>
        <Flash />
        <Button />
        <Square />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  )
}

export default Plain