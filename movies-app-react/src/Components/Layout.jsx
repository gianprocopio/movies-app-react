import React from 'react'

function Layout({title, children}) {
  return (
    <div className='flex flex-col mt-28 items-center justify-center m-auto'>
      <h2 className='text-2xl mb-8 font-semibold'>{title}</h2>
      {children}
    </div>
  )
}

export default Layout
