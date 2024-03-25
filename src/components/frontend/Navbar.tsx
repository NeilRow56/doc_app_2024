import { ThemeToggle } from '../dashboard-layout/ThemeToggle'
import { Button } from '../ui/button'
import Link from 'next/link'

function Navbar() {
  // Holding userId ready for auth
  const userId = ''

  var myDate = new Date()
  var hrs = myDate.getHours()

  var greet

  if (hrs < 12) greet = 'Good Morning!'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!'

  return (
    <div className=" fixed top-0 z-50 flex h-16 w-full  items-center justify-between border-b border-gray-600  bg-white  px-2 dark:bg-neutral-950 md:px-12  lg:px-60">
      <div className="flex  items-start  gap-4 text-xl text-primary">
        <h2
          className={` hidden bg-gradient-to-r from-orange-800 to-orange-300 bg-clip-text text-2xl font-bold text-transparent lg:block`}
        >
          {greet}
        </h2>
      </div>

      <div className="items-center space-x-8 px-2 py-1 font-semibold leading-7 text-primary ">
        <Link className="hover:text-foreground" href="/features">
          Features
        </Link>
        <Link className="hover:text-foreground" href="/marketplace">
          Marketplace
        </Link>
        <Link className="hover:text-foreground" href="/company">
          Company
        </Link>
      </div>

      <div className=" flex  gap-6 ">
        <ThemeToggle />
        {userId ? (
          <Button asChild size="sm" className="px-6  hover:text-slate-900">
            <Link href="/profile">{userId}</Link>
          </Button>
        ) : (
          <Button asChild size="sm" className="px-6  hover:text-slate-900">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Navbar
