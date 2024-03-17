import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" text-center">
      <div className="mx-auto mt-20 w-full ">
        <h2 className="pb-8">I am front pages only layout</h2>
        {children}
      </div>
    </div>
  )
}
export default FrontLayout
