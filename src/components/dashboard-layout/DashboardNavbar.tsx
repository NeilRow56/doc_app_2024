'use client'

import { Button } from '../ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { ThemeToggle } from './ThemeToggle'

function DashboardNavbar() {
  // Holding userId ready for auth
  const userId = 'Tommy'

  var myDate = new Date()
  var hrs = myDate.getHours()

  var greet

  if (hrs < 12) greet = 'Good Morning!'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!'

  return (
    <div className="flex h-16 w-full items-center justify-between  border  border-gray-600  bg-white px-2 dark:bg-neutral-950  md:px-12 lg:px-48">
      <div className="">
        <div>
          <p className="text-xl text-primary">{greet}</p>
        </div>
      </div>
      <div className="relative hidden sm:block ">
        <Search className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          name="search"
          className="primary/40 rounded-lg pl-10 dark:border-gray-300"
        />
      </div>
      <div className=" flex items-center justify-center  gap-6">
        <ThemeToggle />
        {userId ? (
          <div className="flex w-full">
            <div className=" space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger className=" text-primary">
                  <Avatar className="mt-2 h-12 w-12">
                    <AvatarImage src="/profile.jpg" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <Avatar className="h-12 w-12 ">
                      <AvatarImage src="/profile.jpg" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/hotel/new">New</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/edgestore">edgestore</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="pt-4">
              <Button asChild size="sm" className="ml-4  px-6 ">
                <Link href="/login">{userId}</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Button asChild size="sm" className="px-6  ">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardNavbar
