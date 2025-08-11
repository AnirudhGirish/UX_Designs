import React from 'react'

type KeyCRProps = {
    symbol: string,
    command : string,
    isActive?: boolean;
}

// This component is used for command on the right side
const KeyCR:React.FC<KeyCRProps> = ({symbol,command,isActive}) => {
  return (
     <div className={`flex flex-col h-24 w-32 bg-black text-neutral-400 hover:text-white text-2xl gap-1.5 rounded-xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out p-3 ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        <div className='flex justify-start'>
            {symbol}
        </div>
        <div className='flex justify-start items-baseline'>
            {command}
        </div>
    </div>
  )
}

export default KeyCR