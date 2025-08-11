import React from 'react'
import Leather from './Leather'
import Plain from './Plain'

const Frame = () => {
  return (
    <div className='flex h-[45rem] w-[33rem] bg-stone-300/85 mx-auto rounded-2xl items-center justify-end p-6 border-2 border-white/90'>
        <Plain />
        <Leather />
    </div>
  )
}

export default Frame