import { redirect } from 'next/navigation'

interface File {
  size: number
  type: string
  name: string
  lastModified: number
}

export async function booking(prevState: any, formData: FormData) {
  if (formData.get('name') === '') {
    return {
      message: 'Name is required',
      status: 400,
    }
  }
  if (formData.get('email') === '') {
    return {
      message: 'Email is required',
      status: 400,
    }
  }
  if (formData.get('phone') === '') {
    return {
      message: 'Phone is required',
      status: 400,
    }
  }
  if (formData.get('started_at') === '') {
    return {
      message: 'Date is required',
      status: 400,
    }
  }

  const files = formData.get('proof') as File
  if (files.size === 0) {
    return {
      message: 'Proof is required',
      status: 400,
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/api/booking-transaction`, {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()

  return redirect(
    `/packages/${formData.get('slug')}/checkout/success?bookingId=${
      data.data.booking_trx_id
    }`
  )
}
