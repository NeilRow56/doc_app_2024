import Sidebar from '@/components/dashboard-layout/Sidebar'
import Navbar from '@/components/frontend/Navbar'

import React, { ReactNode } from 'react'

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <div className="flex min-h-screen w-full flex-col ">{children}</div>
      </div>
    </div>
  )
}
export default DashboardLayout
