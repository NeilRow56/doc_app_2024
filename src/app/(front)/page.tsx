import Brands from '@/components/frontend/Brands'
import DoctorsList from '@/components/frontend/DoctorsList'
import Hero from '@/components/frontend/Hero'
import TabbedServices from '@/components/frontend/TabbedServices'

export default async function LandingPage() {
  return (
    <section className="mx-auto">
      <Hero />
      <Brands />
      <TabbedServices />
      <DoctorsList />
      <DoctorsList
        className="container bg-teal-100 py-8 dark:bg-slate-700 lg:py-24"
        title="In-person doctor vist"
        isInPerson={true}
      />
    </section>
  )
}
