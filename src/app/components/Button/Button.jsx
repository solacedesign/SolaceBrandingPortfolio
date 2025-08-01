import React from 'react'

const Button = ({children, href, className}) => {
  return (
    <a href={href} className={className + ' uppercase text-xl px-10 py-3 font-bold text-orange-700 bg-[#EAC6AC]'}>
        {children}
    </a>
  )
}

export default Button