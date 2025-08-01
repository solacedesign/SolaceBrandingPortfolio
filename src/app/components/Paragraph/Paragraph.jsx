import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={className + ' text-md font-normal leading-relaxed text-primary-green'}>
        {children}
    </p>
)
}

export default Paragraph