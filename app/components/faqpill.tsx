"use client";
import React, { PropsWithChildren, useState } from "react";



function FaqPill({question, answer}:{question:string; answer:string}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleIsClicked = () => {
  console.log("clicked")
  setIsClicked(!isClicked)
}
  return (
    <div className="question justify-between border-t border-gray-400 py-6 flex items-center">
      <div className={`faqpill-container flex flex-col gap-y-2 overflow-y-hidden ${isClicked ? 'h-[150px]' : 'h-[50px]'} transition-all duration-400`}>
        <span className="question-text font-bold text-base max-w-[85%]">
          {question}
        </span>
        <span className={`${ isClicked ? ' translate-y-4 opacity-100' : 'translate-y-0 opacity-0'} transition-all duration-500 question-text font-bold text-base max-w-[80%]`}>
          {answer}
        </span>
      </div>
      <span onClick={handleIsClicked} className={`chevron-down max-w-[32px] block ${isClicked ? 'rotate-z-180' : ''} duration-300 transition-all`}>
        <img
          className="w-full h-full object-contain"
          src="down.png"
          alt="pic"
        />
      </span>
    </div>
  );
}

export default FaqPill;
