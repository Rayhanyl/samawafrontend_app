import Header from '@/components/Header'
import { TPackage } from '@/components/WeddingPackages/types'
import React from 'react'
import { getData } from '../actions'
import Image from 'next/image'
import thousands from '@/libs/thousands'
import { Content as ContentTestimonial } from '@/components/Testimonials'
import { Content as ContentOrganizer } from '@/components/Organizer'
import Form from './Form'

type Props = {
  params: {
    packageSlug: string
  }
}

export default async function PackageCheckoutPage({ params }: Props) {
  const { packageSlug } = await params // <-- harus di-await

  const { data: details }: { data: TPackage | null } = await getData(
    packageSlug
  )

  if (!details) {
    return (
      <section className="container mx-auto flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">Package not found</h2>
      </section>
    )
  }

  return (
    <section className="container mx-auto flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">Checkout Package</h2>

      <div className="flex gap-x-12">
        <div className="w-8/12">
          {/* Pastikan Form.tsx diawali "use client" */}
          <Form data={details} />
        </div>
        <div className="w-4/12">
          <div className="sticky top-8">
            <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
              <h6 className="text-2xl font-bold">{details.name}</h6>
              <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="w-full h-full object-cover absolute"
                  src={details.thumbnail}
                  alt={details.name}
                  sizes="(max-width: 768px) 100vw"
                />
              </span>

              <h6 className="text-2xl text-color2 font-bold">
                Rp {thousands(details.price ?? 0)}
              </h6>

              <hr />
              <h6 className="font-bold">Happy Story</h6>
              {details.weddingTestimonials?.length ? (
                <ContentTestimonial data={details.weddingTestimonials[0]} />
              ) : (
                <p className="text-sm text-gray-500">No testimonials yet</p>
              )}

              <hr />
              <h6 className="font-bold">Wedding Organizer</h6>
              <ContentOrganizer data={details.weddingOrganizer} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
