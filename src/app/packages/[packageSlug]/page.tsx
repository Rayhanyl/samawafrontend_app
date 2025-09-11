import React from 'react'
import Header from '@/components/Header'
import { TPackage } from '@/components/WeddingPackages/types'
import { Content as ContentTestimony } from '@/components/Testimonials'
import { Content as ContentBonus } from '@/components/Bonus'
import { Content as ContentOrganizer } from '@/components/Organizer'
import Star from '@/assets/images/star.svg'
import Pinpoint from '@/assets/images/pinpoint.svg'
import CheckmarkCircle from '@/assets/images/checkmark-circle.svg'
import { Metadata, ResolvingMetadata } from 'next'
import thousands from '@/libs/thousands'
import Link from 'next/link'
import Slides from './Slides'
import { getData } from './actions'

type Props = {
  params: {
    packageSlug: string
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ packageSlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { packageSlug } = await params
  const { data: details }: { data: TPackage | null } = await getData(
    packageSlug
  )
  const previousImage = (await parent).openGraph?.images || []

  return {
    title: details?.name ?? 'Details',
    openGraph: {
      images: details?.thumbnail
        ? [details.thumbnail, ...previousImage]
        : previousImage,
    },
  }
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageSlug: string }>
}) {
  const { packageSlug } = await params
  const { data: details }: { data: TPackage | null } = await getData(
    packageSlug
  )

  if (!details) {
    return (
      <main className="container mx-auto py-16">Details Package not found</main>
    )
  }

  return (
    <>
      <main className="flex flex-col gap-y-8 relative pb-16">
        <Header />
        <section className="container mx-auto flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="flex flex-col">
              <h2 className="text-3xl font-bold">{details.name}</h2>
              <span className="flex gap-x-2 items-center">
                <Pinpoint />
                {details.city.name} City
              </span>
            </span>

            <span className="flex flex-col items-end gap-y-2">
              <span className="flex gap-x-1 text-color3">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span className="font-bold">
                {thousands(details.weddingTestimonials.length)}
              </span>
            </span>
          </div>
          <Slides
            data={details.photos}
            title={details.name}
            isPopular={details.isPopular === 1}
          />
        </section>

        <section className="container mx-auto">
          <div className="flex gap-x-8">
            <div className="w-8/12 flex flex-col gap-y-7">
              <div className="flex flex-col">
                <h6 className="font-bold text-xl">It's a Good Package</h6>
                <p className="leading-normal">{details.about}</p>
              </div>

              <div className="flex flex-col gap-y-4">
                <h6 className="font-bold text-xl">Bonus Included</h6>
                {details.weddingBonusPackages.map((bonus) => {
                  return (
                    <ContentBonus
                      key={bonus.id}
                      slugPackage={details.slug}
                      data={bonus.bonusPackage}
                    />
                  )
                })}
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                  <h6 className="font-bold text-xl">Wedding Testimonials</h6>
                  <Link
                    href="/"
                    className="border border-dark1 px-5 py-3 rounded-full font-semibold"
                  >
                    View Details
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {details.weddingTestimonials.map((testy) => {
                    return (
                      <ContentTestimony
                        key={testy.id}
                        data={testy}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="sticky top-8">
                <div className="border p-7 flex flex-col gap-y-5 rounded-2xl">
                  <h6 className="text-3xl text-color2 font-bold">
                    Rp {thousands(details.price)}
                  </h6>
                  <hr />
                  <ul className="flex flex-col gap-y-5 list-none">
                    <li className="flex gap-x-3">
                      <CheckmarkCircle />
                      <span className="">
                        Lorem ipsum dolor si amet nikah berkah dunia kita
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckmarkCircle />

                      <span className="">
                        Lorem ipsum dolor si amet nikah berkah dunia kita
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckmarkCircle />

                      <span className="">
                        Lorem ipsum dolor si amet nikah berkah dunia kita
                      </span>
                    </li>
                  </ul>
                  <hr />
                  <h6 className="font-bold">Wedding Organizer</h6>
                  <ContentOrganizer data={details.weddingOrganizer}/>
                  <hr />
                  <Link
                    href="{`packages/${details.slug}/checkout`}"
                    className="flex justify-center bg-color2 py-4 w-full text-light1 rounded-full"
                  >
                    Choose This Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
