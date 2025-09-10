import Header from '@/components/Header'
import Star from '@/assets/images/star.svg'
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { TCity } from '@/components/Cities/types'
import thousands from '@/libs/thousands'
import {
  WeddingPackageGrid,
  WeddingPackageSlider,
} from '@/components/WeddingPackages/index'
import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

async function getData(slug: string) {
  try {
    const res = await fetch(`${process.env.HOST_API}/api/city/${slug}`, {
      method: 'GET',
      cache: 'no-cache',
    })

    if (!res.ok) throw new Error('Failed to fetch city')

    return res.json()
  } catch (error) {
    console.error(error)
    return { data: null }
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ citySlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { citySlug } = await params
  const { data: city }: { data: TCity | null } = await getData(citySlug)
  const previousImage = (await parent).openGraph?.images || []

  return {
    title: city?.name ?? 'City',
    openGraph: {
      images: city?.icon ? [city.icon, ...previousImage] : previousImage,
    },
  }
}

export default async function DetailsCityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>
}) {
  const { citySlug } = await params
  const { data: city }: { data: TCity | null } = await getData(citySlug)

  if (!city) {
    return <main className="container mx-auto py-16">City not found</main>
  }

  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="flex flex-col -mt-8">
        <div className="container mx-auto flex justify-between items-center mb-8">
          <span className="flex max-w-sm">
            <h2 className="text-4xl font-bold">
              Wedding Packages in {city.name} City
            </h2>
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
              ({thousands(city.weddingPackages_count)})
            </span>
          </span>
        </div>

        <WeddingPackageSlider
          data={city.weddingPackages.filter(
            (weddingPackage) => weddingPackage.isPopular === 1
          )}
        />
      </section>
      <section className="container mx-auto flex flex-col">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-bold max-w-md text-center">
            Browse Our Best Selection Wedding Packages
          </h2>
        </div>
        <WeddingPackageGrid data={city.weddingPackages} />
      </section>
      <section className="flex flex-col">
        <div className="container mx-auto flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-xs">
            Happy Stories of Our Wedding
          </h2>
          <Link
            href="/testimonials"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold"
          >
            Explore All
          </Link>
        </div>
        <Testimonials />
      </section>
    </main>
  )
}
