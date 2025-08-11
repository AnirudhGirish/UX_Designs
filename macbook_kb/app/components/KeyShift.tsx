import React from 'react'

type KeyShiftProps = {
    symbol1 : string,
    symbol2 : string,
    isActive?: boolean;
}

// This component will be used for F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12
//.                                `,1,2,3,4,5,6,7,8,9,0,-,=
//                                 [,],\
//                                 ;,'
//                                 ,,.,/
const KeyShift: React.FC<KeyShiftProps>= ({symbol1,symbol2,isActive}) => {
  return (
    <div className={`flex flex-col h-24 w-24 bg-black text-neutral-400 hover:text-white justify-center items-center text-2xl gap-1.5 rounded-xl border-b-1 border-transparent hover:border-white transition duration-150 ease-in-out ${isActive ? "text-white border-white" : "text-neutral-400 border-transparent"}`}>
        <div>
            {symbol1}
        </div>
        <div>
            {symbol2}
        </div>
    </div>
  )
}

export default KeyShift