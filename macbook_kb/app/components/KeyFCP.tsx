import React from 'react'

type KeyFCPProps = {
    symbol: string,
    command : string,
    isActive?: boolean;
}

// This component is used for function control and option on the left side
const KeyFCP:React.FC<KeyFCPProps> = ({symbol,command,isActive}) => {
  return (
     <div className={`flex flex-col h-24 w-24 bg-black text-neutral-400 hover:text-white text-2xl gap-1.5 rounded-xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out p-3 ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        <div className='flex justify-end'>
            {symbol}
        </div>
        <div className='flex justify-start items-baseline'>
            {command}
        </div>
    </div>
  )
}

export default KeyFCP