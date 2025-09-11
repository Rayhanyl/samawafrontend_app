import Image from 'next/image'
import React from 'react'
import Form from './Form'

function page() {
  return (
    <>
      <section className="absolute w-full z-10 top-0 flex h-screen">
        <div className="w-6/12 min-h-screen relative ml-auto">
          <Image
            fill
            className="w-full h-full object-cover absolute"
            src="/images/bookings-page-illustration.png"
            alt="Bookings Page Illustration"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </section>
      <section className="container mx-auto relative z-20 flex mt-10">
            <Form/>
      </section>
    </>
  )
}

export default page
