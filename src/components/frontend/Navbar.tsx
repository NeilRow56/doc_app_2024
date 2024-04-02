import { getServerSession } from 'next-auth'
import { ThemeToggle } from '../dashboard-layout/ThemeToggle'
import { Button } from '../ui/button'
import Link from 'next/link'
import { auth, authOptions } from '@/lib/auth'

async function Navbar() {
  // Holding userId ready for auth
  const session = await getServerSession(authOptions)

  const user = session?.user

  var myDate = new Date()
  var hrs = myDate.getHours()

  var greet

  if (hrs < 12) greet = 'Good Morning!'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!'

  return (
    <div className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
        {user ? (
          <Button asChild size="sm" className="px-6  hover:text-slate-900">
            <Link href="/profile">{user.firstName}</Link>
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
