import React from 'react'

type KeyProps = {
  letter: string,
  isActive?: boolean;
}

// This component will be used for q,w,e,r,t,y,u,i,o,p
//                                  a,s,d,f,g,h,j,k,l
//                                   z,x,c,v,b,n,m
const Key: React.FC<KeyProps>= ({letter, isActive}) => {
  return (
    <div className={`flex items-center justify-center h-24 w-24 bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
      {letter}
    </div>
  )
}

export default Key