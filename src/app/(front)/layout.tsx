import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-muted">
      <div className="mx-auto w-full ">
        <Navbar />
        <div className="mx-auto max-w-7xl py-6">
          <MegaMenu />
        </div>
        {children}
      </div>
    </div>
  )
}
export default FrontLayout
