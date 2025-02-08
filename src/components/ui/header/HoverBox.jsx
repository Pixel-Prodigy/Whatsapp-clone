import React from 'react'

export function HoverBox({text , className , ...props}) {
  return (
    <div className={`px-5 h-[33px] transition-transform  bg-white rounded-full ${className} flex items-center justify-center`} {...props}>{text}</div>
  )
}
