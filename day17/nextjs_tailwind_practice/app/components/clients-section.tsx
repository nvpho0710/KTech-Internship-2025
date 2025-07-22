import Image from "next/image"

export function ClientsSection() {
  const clientLogos = [
    "/placeholder.svg?height=60&width=150&text=Client+1",
    "/placeholder.svg?height=60&width=150&text=Client+2",
    "/placeholder.svg?height=60&width=150&text=Client+3",
    "/placeholder.svg?height=60&width=150&text=Client+4",
    "/placeholder.svg?height=60&width=150&text=Client+5",
    "/placeholder.svg?height=60&width=150&text=Client+6",
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Trusted by Leading Companies</h2>
        <p className="text-gray-600 text-lg">Join the ranks of successful businesses finding talent with Superio.</p>
      </div>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg flex items-center justify-center h-24 w-full max-w-[180px]"
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt={`Client logo ${index + 1}`}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
