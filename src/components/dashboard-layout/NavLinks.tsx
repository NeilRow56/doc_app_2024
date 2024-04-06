'use client'

import {
  Clapperboard,
  Cog,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from 'lucide-react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const links = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'Search',
    href: '/dashboard/search',
    icon: Search,
    hideOnMobile: true,
  },
  { name: 'Doctors', href: '/join/doctors', icon: Compass },
  {
    name: 'Medication',
    href: '/dashboard/medication',
    icon: Clapperboard,
  },
  {
    name: 'Appontments',
    href: '/dashboard/appointments',
    icon: MessageCircle,
  },
  {
    name: 'Notifications',
    href: '/dashboard/notifications',
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: 'Get Started',
    href: '/dashboard/createPlan?role=DOCTOR@plan=free',
    icon: PlusSquare,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Cog,
  },
]

function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        const isActive = pathname === link.href

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? 'secondary' : 'ghost',
              className: cn('navLink', { 'hidden md:flex': link.hideOnMobile }),
              size: 'lg',
            })}
          >
            <LinkIcon className="w-6" />
            <p
              className={`${cn('hidden lg:block', {
                'font-extrabold': isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks
