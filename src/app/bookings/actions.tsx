import { redirect } from 'next/navigation'

interface File {
  size: number
  type: string
  name: string
  lastModified: number
}

export async function checkBooking(prevState: any, formData: FormData) {
  if (formData.get('booking_trx_id') === '') {
    return {
      message: 'Booking TRX ID is required',
      status: 400,
    }
  }

  if (formData.get('phone') === '') {
    return {
      message: 'Phone is required',
      status: 400,
    }
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_API}/api/check-booking`,
    {
      method: 'POST',
      body: formData,
    }
  )
  const data = await res.json()

  return redirect(
    `/bookings/${formData.get('booking_trx_id')}?phone=${formData.get('phone')}`
  )
}
