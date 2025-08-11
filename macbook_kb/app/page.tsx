"use client";

import React, { useEffect, useState } from "react";

import Key from "@/app/components/Key";
import KeyShift from "./components/KeyShift";
import KeyEsc from "./components/KeyEsc";
import KeyshiftL from "./components/KeyshiftL";
import KeyshiftR from "./components/KeyshiftR";
import KeyDelete from "./components/KeyDelete";
import KeyCE from "./components/KeyCE";
import KeyEC from "./components/KeyEC";
import KeyFCP from "./components/KeyFCP";
import KeyOR from "./components/KeyOR";
import KeyCL from "./components/KeyCL";
import KeyCR from "./components/KeyCR";
import KeySpace from "./components/KeySpace";
import KeyArrow from "./components/KeyArrow";

export default function Home() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key;

      if (key.length === 1) key = key.toUpperCase();

      setActiveKey(key);
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-950 p-50 overflow-auto text-white ">
      <div className="h-[70rem] w-[114rem] bg-neutral-900 mx-auto rounded-4xl mb-3 px-12 pt-6">
        <div className="h-8 w-8 bg-neutral-700 rounded-full mx-auto mb-10 border-1 border-neutral-500">
          <div className="h-6 w-6 bg-black opacity-25 mt-1 rounded-full mx-auto mb-10 border-1 border-neutral-500"></div>
        </div>
        <div className="bg-black opacity-90 h-[60rem] mx-auto rounded-xl border-1 border-black">
        </div>
        <div className="flex text-3xl text-neutral-500 tracking-tight pt-2.5 justify-center">MacBook Pro</div>
      </div>
      <div className="flex flex-col bg-neutral-900 rounded-4xl w-fit px-4 mx-auto">
        <div className="h-5 w-[80rem] bg-black mx-auto mb-10"></div>
        <div className="flex">
          <div className="h-[38rem] w-26 bg-neutral-950/40 mr-4 mt-6 border-1 border-neutral-800"
               style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0.2) 4px,transparent 0)`,backgroundSize: "11px 10px", backgroundRepeat:"repeat",
               }}
          ></div>
          <div className="space-y-3 bg-neutral-800 p-3 rounded-2xl w-fit mx-auto border-1 border-neutral-500">
          <div className="flex gap-2.5 items-center">
            <KeyEsc command="Esc" isActive={activeKey === "Escape"} />
            <KeyShift symbol1="F1" symbol2="" isActive={activeKey === "F1"} />
            <KeyShift symbol1="F2" symbol2="" isActive={activeKey === "F2"} />
            <KeyShift symbol1="F3" symbol2="" isActive={activeKey === "F3"} />
            <KeyShift symbol1="F4" symbol2="" isActive={activeKey === "F4"} />
            <KeyShift symbol1="F5" symbol2="" isActive={activeKey === "F5"} />
            <KeyShift symbol1="F6" symbol2="" isActive={activeKey === "F6"} />
            <KeyShift symbol1="F7" symbol2="" isActive={activeKey === "F7"} />
            <KeyShift symbol1="F8" symbol2="" isActive={activeKey === "F8"} />
            <KeyShift symbol1="F9" symbol2="" isActive={activeKey === "F9"} />
            <KeyShift symbol1="F10" symbol2="" isActive={activeKey === "F10"} />
            <KeyShift symbol1="F11" symbol2="" isActive={activeKey === "F11"} />
            <KeyShift symbol1="F12" symbol2="" isActive={activeKey === "F12"} />
            <Key letter="" />
          </div>

          <div className="flex gap-2.5 items-center">
            <KeyShift symbol1="~" symbol2="`" isActive={["`", "~"].includes(activeKey || "")} />
            <KeyShift symbol1="!" symbol2="1" isActive={["1", "!"].includes(activeKey || "")} />
            <KeyShift symbol1="@" symbol2="2" isActive={["2", "@"].includes(activeKey || "")} />
            <KeyShift symbol1="#" symbol2="3" isActive={["3", "#"].includes(activeKey || "")} />
            <KeyShift symbol1="$" symbol2="4" isActive={["4", "$"].includes(activeKey || "")} />
            <KeyShift symbol1="%" symbol2="5" isActive={["5", "%"].includes(activeKey || "")} />
            <KeyShift symbol1="^" symbol2="6" isActive={["6", "^"].includes(activeKey || "")} />
            <KeyShift symbol1="&" symbol2="7" isActive={["7", "&"].includes(activeKey || "")} />
            <KeyShift symbol1="*" symbol2="8" isActive={["8", "*"].includes(activeKey || "")} />
            <KeyShift symbol1="(" symbol2="9" isActive={["9", "("].includes(activeKey || "")} />
            <KeyShift symbol1=")" symbol2="0" isActive={["0", ")"].includes(activeKey || "")} />
            <KeyShift symbol1="_" symbol2="-" isActive={["-", "_"].includes(activeKey || "")} />
            <KeyShift symbol1="+" symbol2="=" isActive={["=", "+"].includes(activeKey || "")} />
            <KeyDelete command="delete" isActive={activeKey === "Backspace"} />
          </div>

          <div className="flex gap-2.5 items-center">
            <KeyEsc command="tab" isActive={activeKey === "Tab"} />
            <Key letter="Q" isActive={activeKey === "Q"} />
            <Key letter="W" isActive={activeKey === "W"} />
            <Key letter="E" isActive={activeKey === "E"} />
            <Key letter="R" isActive={activeKey === "R"} />
            <Key letter="T" isActive={activeKey === "T"} />
            <Key letter="Y" isActive={activeKey === "Y"} />
            <Key letter="U" isActive={activeKey === "U"} />
            <Key letter="I" isActive={activeKey === "I"} />
            <Key letter="O" isActive={activeKey === "O"} />
            <Key letter="P" isActive={activeKey === "P"} />
            <KeyShift symbol1="{" symbol2="[" isActive={["[", "{"].includes(activeKey || "")} />
            <KeyShift symbol1="}" symbol2="]" isActive={["]", "}"].includes(activeKey || "")} />
            <KeyShift symbol1="|" symbol2={"\\"} isActive={["\\", "|"].includes(activeKey || "")} />
          </div>

          <div className="flex gap-2 items-center">
            <KeyCE command="caps lock" isActive={activeKey === "CapsLock"} />
            <Key letter="A" isActive={activeKey === "A"} />
            <Key letter="S" isActive={activeKey === "S"} />
            <Key letter="D" isActive={activeKey === "D"} />
            <Key letter="F" isActive={activeKey === "F"} />
            <Key letter="G" isActive={activeKey === "G"} />
            <Key letter="H" isActive={activeKey === "H"} />
            <Key letter="J" isActive={activeKey === "J"} />
            <Key letter="K" isActive={activeKey === "K"} />
            <Key letter="L" isActive={activeKey === "L"} />
            <KeyShift symbol1=":" symbol2=";" isActive={[";", ":"].includes(activeKey || "")} />
            <KeyShift symbol1={'"'} symbol2={"'"} isActive={["'", '"'].includes(activeKey || "")} />
            <KeyEC command="return" isActive={activeKey === "Enter"} />
          </div>

          <div className="flex gap-2.5 items-center">
            <KeyshiftL command="shift" isActive={activeKey === "Shift"} />
            <Key letter="Z" isActive={activeKey === "Z"} />
            <Key letter="X" isActive={activeKey === "X"} />
            <Key letter="C" isActive={activeKey === "C"} />
            <Key letter="V" isActive={activeKey === "V"} />
            <Key letter="B" isActive={activeKey === "B"} />
            <Key letter="N" isActive={activeKey === "N"} />
            <Key letter="M" isActive={activeKey === "M"} />
            <KeyShift symbol1="<" symbol2="," isActive={[",", "<"].includes(activeKey || "")} />
            <KeyShift symbol1=">" symbol2="." isActive={[".", ">"].includes(activeKey || "")} />
            <KeyShift symbol1="?" symbol2="/" isActive={["/", "?"].includes(activeKey || "")} />
            <KeyshiftR command="shift" isActive={activeKey === "Shift"} />
          </div>

          <div className="flex gap-2.5 items-center">
            <KeyFCP symbol="🌐" command="fn" isActive={activeKey === "Fn"} />
            <KeyFCP symbol="⌃" command="control" isActive={activeKey === "Control"} />
            <KeyFCP symbol="⌥" command="option" isActive={activeKey === "Alt"} />
            <KeyCL symbol="⌘" command="command" isActive={activeKey === "Meta"} />
            <KeySpace isActive={activeKey === " "} />
            <KeyCR symbol="⌘" command="command" isActive={activeKey === "Meta"} />
            <KeyOR symbol="⌥" command="option" isActive={activeKey === "Alt"} />

            <div className="flex flex-col justify-center items-center gap-1">
              <KeyArrow symbol="˄" isActive={activeKey === "ArrowUp"} />
              <div className="flex gap-1">
                <KeyArrow symbol="˂" isActive={activeKey === "ArrowLeft"} />
                <KeyArrow symbol="˅" isActive={activeKey === "ArrowDown"} />
                <KeyArrow symbol="˃" isActive={activeKey === "ArrowRight"} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[38rem] w-26 bg-neutral-950/40 ml-4 mt-6 border-1 border-neutral-800"
               style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0.2) 4px,transparent 0)`,backgroundSize: "11px 10px", backgroundRepeat:"repeat",
               }}
          ></div>
        </div>
        <div className="h-[28rem] w-3xl bg-neutral-900/5 mx-auto mt-8 rounded-3xl border-1 border-neutral-500">
        </div>
        <div className="h-[2rem] w-78 bg-neutral-800/50 mt-4 mx-auto rounded-t-4xl border-1 border-black"></div>
      </div>
    </div>
  );
}
