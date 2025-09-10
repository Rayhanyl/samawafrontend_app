'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export function PreventScrolling() {
  useLayoutEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return null
}

export function RouterBack({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div
      className={className || 'absolute inset-0 z-10 cursor-pointer'}
      onClick={() => router.back()}
    >
      {children}
    </div>
  )
}
