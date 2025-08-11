import React from 'react'

type KeyArrowProps = {
    symbol: string,
    isActive?: boolean;
}

const KeyArrow:React.FC<KeyArrowProps> = ({symbol,isActive}) => {
  return (
    <div className={`flex items-center justify-center h-12 w-24 bg-black text-neutral-400 hover:text-white rounded-xl text-2xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
      {symbol}
    </div>
  )
}

export default KeyArrow