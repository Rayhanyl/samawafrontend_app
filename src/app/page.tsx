import Header from '@/components/Header'
import WeddingPackagesWrapper from '@/components/WeddingPackages'
import Slider from '@/components/WeddingPackages'

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
    </main>
  )
}
