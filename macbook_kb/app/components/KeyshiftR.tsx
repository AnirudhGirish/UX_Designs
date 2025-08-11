import React from 'react'

type KeyshiftRprops = {
    command: string,
    isActive?: boolean;
}

// This component is use for right shift key
const KeyshiftR:React.FC<KeyshiftRprops> = ({command, isActive}) => {
  return (
     <div className={`flex p-3 items-end justify-end h-24 w-56 bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        {command}
    </div>
  )
}

export default KeyshiftR