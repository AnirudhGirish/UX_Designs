import React from 'react'

type KeyDeleteProps = {
    command: string,
    isActive?: boolean;
}

// This component is used for delete key
const KeyDelete:React.FC<KeyDeleteProps> = ({command,isActive}) => {
  return (
    <div className={`flex p-3 items-end justify-end h-24 w-36 bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        {command}
    </div>
  )
}

export default KeyDelete