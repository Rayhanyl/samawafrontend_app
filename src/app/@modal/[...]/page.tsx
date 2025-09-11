import { PreventScrolling, RouterBack } from '@/components/Modal'
import React from 'react'
import Bonus from './Bonus'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    modal?: string
    bonusId?: string
    slugPackage?: string
    [key: string]: string | undefined
  }>
}) {
  const { modal, bonusId, slugPackage } = await searchParams

  if (modal?.toLowerCase() === 'bonus') {
    return (
      <>
        <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
          <div className="bg-white max-w-xl p-4 rounded-2xl relative z-20">
            <Bonus
              bonusId={bonusId || ''}
              slugPackage={slugPackage || ''}
            />
          </div>
          <RouterBack />
        </div>
        <PreventScrolling />
      </>
    )
  }

  return null
}
