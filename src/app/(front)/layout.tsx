import Footer from '@/components/doctors/Footer'
import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <div className=" bg-background">
        <Navbar />
        {/* <div className=" fixed  top-16 z-50 w-full bg-background py-6 pl-4 md:pl-24 lg:pl-64">
        <MegaMenu />
      </div> */}
        <div className="bg-background pt-[60px] md:pt-[100px]">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default FrontLayout
