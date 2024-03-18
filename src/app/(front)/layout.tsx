import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      <div className="mx-auto w-full ">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
export default FrontLayout
