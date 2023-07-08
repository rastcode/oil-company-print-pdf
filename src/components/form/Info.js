import React from 'react'

function Info({className,placeholder,value}) {
  return (
    <div className={className}>
            <p>{placeholder}</p>
            <p>{value}</p>
          </div>
  )
}

export default Info