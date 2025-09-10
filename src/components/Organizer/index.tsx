import React from 'react'
import { TOrganizer } from './types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  data: TOrganizer
}

export function Content({ data }: Props) {
  return (
    <div className="flex border border-light3 hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative">
      <span className="relative w-[80px] aspect-square rounded-full overflow-hidden">
        <Image
          fill
          className="w-full h-full object-cover absolute"
          src={data.icon}
          alt={data.name}
          sizes="(max-width: 768px) 100vw"
        />
      </span>
      <span className="flex flex-col">
        <span className="text-xl font-bold">{data.name}</span>
        <span className="">{`${data.weddingPackages_count} Package${data.weddingPackages_count > 1 ? "s":""}`}</span>
      </span>
      <Link
        href={`/organizer`}
        className="absolute inset-0"
      ></Link>
    </div>
  )
}
