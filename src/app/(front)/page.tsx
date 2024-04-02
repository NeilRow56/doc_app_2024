import SigninButton from '@/components/frontend/auth/SignInButton'
import Brands from '@/components/frontend/Brands'
import DoctorsList from '@/components/frontend/DoctorsList'
import Hero from '@/components/frontend/Hero'
import MegaMenu from '@/components/frontend/MegaMenu'
import Pricing from '@/components/frontend/Pricing'
import TabbedServices from '@/components/frontend/TabbedServices'

export default async function LandingPage() {
  return (
    <section className="mx-auto bg-background ">
      <div className=" fixed  top-16 z-50 w-full bg-background py-6 pl-4 md:pl-24 lg:pl-64">
        <MegaMenu />
      </div>
      <div className="mx-auto  flex max-w-sm  justify-center space-y-4 ">
        <SigninButton />
      </div>
      <Hero />
      <Brands />
      <TabbedServices />
      <DoctorsList />
      <DoctorsList
        className="container bg-teal-100 py-8 dark:bg-slate-700 lg:py-24"
        title="In-person doctor vist"
        isInPerson={true}
      />
      <Pricing />
    </section>
  )
}
