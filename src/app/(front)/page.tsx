import Brands from '@/components/frontend/Brands'
import DoctorsList from '@/components/frontend/DoctorsList'
import Hero from '@/components/frontend/Hero'
import TabbedServices from '@/components/frontend/TabbedServices'

export default async function LandingPage() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedServices />
      <DoctorsList />
    </section>
  )
}
