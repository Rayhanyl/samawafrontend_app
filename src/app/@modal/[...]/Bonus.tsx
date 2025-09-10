import { RouterBack } from '@/components/Modal'
import { TPackage } from '@/components/WeddingPackages/types'
import thousands from '@/libs/thousands'
import Image from 'next/image'
import React from 'react'

type Props = {
    bonusId: string
    slugPackage: string
  }

async function getData(slug: string) {
  try {
    const res = await fetch(
      `${process.env.HOST_API}/api/wedding-package/${slug}`,
      {
        method: 'GET',
      }
    )

    if (!res.ok) throw new Error('Failed to fetch city')

    return res.json()
  } catch (error) {
    console.error(error)
    return { data: null }
  }
}

async function Bonus({bonusId, slugPackage}: Props){
    const {data: detail}: { data: TPackage} = await getData(slugPackage)
    const bonus = detail.weddingBonusPackages.find(
        (bonusPackage) => bonusPackage.bonusPackage.id === Number(bonusId))
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            fill
            className="w-full h-full object-cover absolute"
            src={`${bonus?.bonusPackage.thumbnail}`}
            alt={bonus?.bonusPackage.name || 'Bonus Image'}
            sizes="(max-width: 768px) 100vw"
          />
        </span>
        <hr />
        <div className="flex flex-col">
          <h6 className="text-xl font-bold">
            {bonus?.bonusPackage.name}
          </h6>
          <span className="flex gap-x-2">
            <span className="text-color2">
              <span className="font-semibold"> Rp 0 </span>
              <span className=""> /package </span>
            </span>
            <span className="line-through">Rp {thousands(bonus?.bonusPackage.price)}</span>
          </span>
        </div>

        <hr />
        <div className="flex flex-col">
          <h6 className="font-bold text-xl">About</h6>
          <p className="leading-normal">
            {bonus?.bonusPackage.about}
          </p>
        </div>
        <hr />
        <span className="flex">
            <RouterBack className="border cursor-pointer border-dark1 px-5 py-3 rounded-full font-semibold">
                Close Details
            </RouterBack>
        </span>
      </div>
    </>
  )
}

export default Bonus