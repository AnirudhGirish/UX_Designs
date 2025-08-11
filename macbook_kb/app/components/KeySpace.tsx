import React from 'react'

type KeySpaceProps = {
    isActive?: boolean;
}

// This component will be used for space bar key
const Key: React.FC<KeySpaceProps> = ({isActive}) => {
  return (
    <div className={`flex items-center justify-center h-24 w-[32rem] bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
    </div>
  )
}

export default Key