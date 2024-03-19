import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-muted">
      <Navbar />
      <div className=" fixed left-4 top-16 z-50 w-full bg-background py-6 md:left-24 lg:left-64">
        <MegaMenu />
      </div>
      {children}
    </div>
  )
}
export default FrontLayout
