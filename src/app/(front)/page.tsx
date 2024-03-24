import SigninButton from '@/components/frontend/auth/SignInButton'
import Brands from '@/components/frontend/Brands'
import DoctorsList from '@/components/frontend/DoctorsList'
import Hero from '@/components/frontend/Hero'
import TabbedServices from '@/components/frontend/TabbedServices'

export default async function LandingPage() {
  return (
    <section className="mx-auto bg-background ">
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
    </section>
  )
}
