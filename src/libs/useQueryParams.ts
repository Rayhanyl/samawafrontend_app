'use client'

import { useSearchParams } from 'next/navigation'

export function useQueryParams() {
  const query = useSearchParams()

  let queryParams: {
    [key: string]: string
  } = {}

  for (const [key, value] of query.entries()) {
    queryParams[key] = value
  }

  return queryParams
}


