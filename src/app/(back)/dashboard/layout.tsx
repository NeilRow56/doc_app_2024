import DashboardNavbar from '@/components/dashboard-layout/DashboardNavbar'
import Sidebar from '@/components/dashboard-layout/Sidebar'

import React, { ReactNode } from 'react'

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full pl-4 md:grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <DashboardNavbar />
        <div className="flex min-h-screen w-full flex-col ">{children}</div>
      </div>
    </div>
  )
}
export default DashboardLayout
