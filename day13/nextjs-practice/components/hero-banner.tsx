import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="container mx-auto px-4 py-4">
        <div className="relative rounded-lg overflow-hidden bg-black">
          <Image
            src="/banner2.png"
            alt="Sony Promotion Banner"
            width={1200}
            height={300}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  )
}
