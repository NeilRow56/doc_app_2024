import React from 'react'
import PriceCard from './PriceCard'

export default function Pricing() {
  return (
    <section
      className=" container mx-auto bg-white py-6 leading-7 text-gray-900 sm:py-12 md:py-16
    "
    >
      <h2>Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  )
}
