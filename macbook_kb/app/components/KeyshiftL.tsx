import React from 'react'

type KeyshiftLprops = {
    command: string,
    isActive?: boolean;
}

// This component is use for left shift key
const KeyshiftL:React.FC<KeyshiftLprops> = ({command,isActive}) => {
  return (
    <div className={`flex p-3 items-end justify-start h-24 w-56 bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        {command}
    </div>
  )
}

export default KeyshiftL