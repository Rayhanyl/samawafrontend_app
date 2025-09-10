import { PreventScrolling, RouterBack } from '@/components/Modal'
import React from 'react'
import Bonus from './Bonus'

type Request = {
  searchParams: {
    modal?: string
    bonusId?: string
    slugPackage?: string
    [key: string]: string | undefined
  }
}

export default function Page({ searchParams }: Request) {
  const { modal, bonusId, slugPackage } = searchParams

  if (modal?.toLowerCase() === 'bonus') {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
            <Bonus bonusId={bonusId || ''} slugPackage={slugPackage || ''} />
          </div>
          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    )
  }

  return null
}
