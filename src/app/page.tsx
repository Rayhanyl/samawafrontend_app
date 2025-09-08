import Header from '@/components/Header'
import WeddingPackagesWrapper from '@/components/WeddingPackages'
import Slider from '@/components/WeddingPackages'
import ThumbsUp from '@/assets/images/thumbsup.svg'
import CreditCard from '@/assets/images/creditCard.svg'
import HomeTown from '@/assets/images/hometown.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section>
        <WeddingPackagesWrapper
          show="popular"
          type="slider"
        />
      </section>
      <section className="container mx-auto flex flex-col">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">
          Alasan Mereka Memilih Wedding Package Samawa
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <ThumbsUp />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link
              href="#"
              className="text-color2 hover:underline"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <CreditCard />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link
              href="#"
              className="text-color2 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <HomeTown className="w-[50px] h-[50px]" />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link
              href="#"
              className="text-color2 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-sm">
            Our Latest & Best Wedding Packages
          </h2>
          <Link
            href="/packages"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold"
          >
            Explore All
          </Link>
        </div>
        <WeddingPackagesWrapper
          show="newest"
          type="grid"
        />
      </section>
    </main>
  )
}
