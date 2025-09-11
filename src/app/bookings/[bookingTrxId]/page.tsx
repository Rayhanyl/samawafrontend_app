import { TPackage } from '@/components/WeddingPackages/types'
import React from 'react'

import ArrowDown from '@/assets/images/arrow-down.svg'
import IconUser from '@/assets/images/user.svg'
import IconEnvelop from '@/assets/images/envelop.svg'
import IconPhone from '@/assets/images/phone.svg'
import IconCalendar from '@/assets/images/calendar.svg'
import IconReceipt from '@/assets/images/receipt.svg'
import IconCurrencyDollar from '@/assets/images/currency-dollar.svg'
import IconTax from '@/assets/images/tax.svg'
import IconComments from '@/assets/images/comments.svg'
import IconServerShield from '@/assets/images/server-shield.svg'
import IconWallet from '@/assets/images/wallet.svg'
import IconCreditCard from '@/assets/images/credit-card.svg'
import LogoBca from '@/assets/images/logo-bca.svg'
import LogoMandiri from '@/assets/images/logo-mandiri.svg'
import IconVerified from '@/assets/images/verified.svg'
import IconNotesProof from '@/assets/images/notes-proof.svg'
import Image from 'next/image'
import Link from 'next/link'

import { Content as ContentBonus } from '@/components/Bonus'
import { Content as ContentOrganizer } from '@/components/Organizer'
import thousands from '@/libs/thousands'
import { Content } from '@/components/Testimonials'

type Request = {
  params: { bookingTrxId: string }
  searchParams: { phone: string }
}

type TBooking = {
  id: number
  name: string
  email: string
  proof: string
  phone: string
  booking_trx_id: string
  is_paid: 0 | 1
  total_amount: number
  started_at: string
  weddingPackage: TPackage
}

export async function getData(
  booking_trx_id: string,
  phone: string
): Promise<TBooking> {
  try {
    const formData = new FormData()
    formData.append('booking_trx_id', booking_trx_id)
    formData.append('phone', phone)

    const req = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API}/api/check-booking`,
      {
        method: 'POST',
        cache: 'no-cache',
        body: formData,
      }
    )

    if (!req.ok) throw new Error('Failed to fetch booking')

    return req.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default async function BookingFoundPage({
  params,
  searchParams,
}: Request) {
  const data = await getData(params.bookingTrxId, searchParams.phone)
  
  return (
    <section className="container mx-auto flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">Booking #{params.bookingTrxId}</h2>

      <div className="flex gap-x-12">
        <div className="w-8/12">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="customer-information"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="customer-information"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Customer Information</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 h-full peer-checked:max-h-screen">
                <hr />
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="fullname">Full Name</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconUser />
                      </span>
                      <input
                        type="text"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="fullname"
                        id="fullname"
                        placeholder="Write your complete name"
                        defaultValue={data.data.name}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="email">Email Address</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconEnvelop />
                      </span>
                      <input
                        type="email"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="email"
                        id="email"
                        placeholder="Write your complete email"
                        defaultValue={data.data.email}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconPhone />
                      </span>
                      <input
                        type="tel"
                        className="pl-10 w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="Let us know your number"
                        defaultValue={data.data.phone}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="date">Started At</label>
                    <div className="flex relative">
                      <span className="absolute left-0 bottom-0 top-0 aspect-square flex items-center justify-center text-color2">
                        <IconCalendar />
                      </span>
                      <input
                        type="date"
                        className="pl-10 appearance-none w-full py-3 pr-4 border border-light3 focus:outline-none focus:border-color2 rounded-full"
                        name="date"
                        id="date"
                        placeholder="Write your complete date"
                        defaultValue={data.data.started_at}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="wedding-bonus"
                className="peer hidden"
              />
              <label
                htmlFor="wedding-bonus"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Wedding Bonus Package</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                {data.data.weddingPackage.weddingBonusPackages.map((bonus) => {
                  return (
                    <ContentBonus
                      key={bonus.bonusPackage.id}
                      data={bonus.bonusPackage}
                      slugPackage={data.data.weddingPackage.slug} 
                    />
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-5 bg-white rounded-2xl p-7">
              <input
                type="checkbox"
                name="accordion"
                id="payment-details"
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor="payment-details"
                className="flex justify-between [--state-rotate:0deg] peer-checked:[--state-rotate:180deg]"
              >
                <h6 className="text-xl font-bold">Payment Details</h6>
                <span className="text-color2 flex items-center justify-center transition-all duration-300 [rotate:var(--state-rotate)]">
                  <ArrowDown />
                </span>
              </label>
              <div className="flex flex-col gap-y-5 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                <hr />
                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconReceipt />
                  </span>
                  <span className="">Status Transaction</span>
                  {
                    data.data.is_paid === 0 ? (
                      <span className="font-semibold text-light1 ml-auto bg-red-500 rounded-full py-1 px-3 uppercase">
                        Pending
                      </span>
                    ) : (
                      <span className="font-semibold text-light1 ml-auto bg-color4 rounded-full py-1 px-3 uppercase">
                        Success
                      </span>
                    )
                  }
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconReceipt />
                  </span>
                  <span className="">Package Quantity</span>
                  <span className="font-bold ml-auto">1 Wedding Package</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconComments />
                  </span>
                  <span className="">Consultation & Insurance</span>
                  <span className="font-bold ml-auto">Rp 0 (Free)</span>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-color2">
                    <IconServerShield />
                  </span>
                  <span className="">Grand Total Amount</span>
                  <span className="font-bold text-xl text-color2 ml-auto">
                    Rp {thousands(data.data.total_amount)}
                  </span>
                </div>
                <hr />

                <h6 className="text-xl font-bold">Proof of Payment</h6>

                <span className="relative w-[390px] aspect-video rounded-2xl overflow-hidden">
                  <Image
                    fill
                    className="w-full h-full object-cover absolute"
                    src={data.data.proof}
                    alt={`Proof of payment for booking ${data.data.booking_trx_id}`}
                    sizes="(max-width: 768px) 100vw"
                  />
                </span>

                <Link
                  href="#"
                  className="bg-color2 text-light1 font-semibold gap-x-2 flex items-center justify-center py-3 rounded-full w-full"
                >
                  <span>Contact Customer Service</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <div className="sticky top-8">
            <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
              <h6 className="text-2xl font-bold">
                Nikah Muda Abadi Pantai Bali Indah Sejahtera
              </h6>
              <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  fill
                  className="w-full h-full object-cover absolute"
                  src={data.data.weddingPackage.thumbnail}
                  alt={data.data.weddingPackage.name}
                  sizes="(max-width: 768px) 100vw"
                />
              </span>

              <h6 className="font-bold">Wedding Organizer</h6>
              <ContentOrganizer data={data.data.weddingPackage.weddingOrganizer}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
