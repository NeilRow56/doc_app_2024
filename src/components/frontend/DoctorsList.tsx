import Link from 'next/link'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'
import SectionHeading from './SectionHeading'
import DoctorCard from './DoctorCard'

export default function DoctorsList() {
  return (
    <div className="container py-6">
      <SectionHeading title="Telehealth vist" />

      <div className=" flex items-center justify-between">
        <div className=" flex h-10 items-center space-x-2">
          <Switch className="dark:bg-slate-300" id="2_hours" />

          <Label className="font-bold text-red-600" htmlFor="2_hours">
            Within 2 hours
          </Label>
        </div>

        <Link
          className="border border-orange-600 px-4 py-2 text-primary"
          href="/"
        >
          See All{' '}
        </Link>
      </div>
      <div className=" mt-4 grid grid-cols-3 gap-4">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  )
}
