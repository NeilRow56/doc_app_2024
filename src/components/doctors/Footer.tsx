'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footerNavs = [
  {
    label: 'Company',
    items: [
      {
        href: '/join/doctors',
        name: 'List your Service',
      },
      {
        href: 'javascript:void()',
        name: 'Blog',
      },
      {
        href: 'javascript:void()',
        name: 'Team',
      },
      {
        href: 'javascript:void()',
        name: 'Careers',
      },
    ],
  },
  {
    label: 'Resources',
    items: [
      {
        href: 'javascript:void()',
        name: 'contact',
      },
      {
        href: 'javascript:void()',
        name: 'Support',
      },
      {
        href: 'javascript:void()',
        name: 'Docs',
      },
      {
        href: 'javascript:void()',
        name: 'Pricing',
      },
    ],
  },
  {
    label: 'About',
    items: [
      {
        href: 'javascript:void()',
        name: 'Terms',
      },
      {
        href: 'javascript:void()',
        name: 'License',
      },
      {
        href: 'javascript:void()',
        name: 'Privacy',
      },
      {
        href: 'javascript:void()',
        name: 'About US',
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="fixed bottom-[-30px]  flex w-full bg-white px-4 py-1 text-gray-500 dark:bg-slate-900 md:px-8">
      <div className="max-w-8xl mx-auto space-y-1 px-3 py-1">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">DocApp</h3>
            <p className="text-sm text-muted-foreground">
              Connecting talents with opportunities
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/join/doctors" className="hover:underline">
              List your Service
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DocApp, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
