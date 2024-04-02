import { Album } from 'lucide-react'
import Link from 'next/link'

export default function PriceCard() {
  return (
    <div className="  mt-8 flex max-w-[425px]  flex-col rounded-md border-2 border-primary bg-gray-50 pl-4 pt-4 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700">
      <Link href="/doctors/slug">
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          Starter £59 per month
        </h2>
      </Link>
      <div className="border-t border-gray-400 pt-6">
        <h3 className="flex items-center justify-between gap-4 px-2">
          <span className="text-gray-600 dark:text-slate-50">
            Pricing details
          </span>
          <span className="font-bold">
            <Album />
          </span>
        </h3>
        <div className="grid grid-cols-3 p-2 ">
          <Link
            className="m-2 h-8 items-center rounded-sm bg-blue-900   text-center text-secondary dark:text-slate-50 "
            href="/pricing"
          >
            Start here
          </Link>
        </div>
      </div>
    </div>
  )
}
