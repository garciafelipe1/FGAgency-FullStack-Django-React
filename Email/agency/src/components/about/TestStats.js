const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function TestStats() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://i.pinimg.com/736x/2a/04/85/2a0485dfa238e25a124319868835419e.jpg"
                  alt=""
                />
                <div className="absolute inset-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t  opacity-90" />
                <div className="relative px-8 h-64 w-auto">
                  
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-4xl font-modern tracking-tight text-gray-900 sm:text-5xl">
              Our Mission: Empowering Teams for Success
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                In today’s fast-paced and competitive landscape, the true driving force behind growth and innovation is high-performing teams. Our mission is to equip teams with the right tools, strategies, and resources to enhance efficiency, foster collaboration, and maximize their potential.
                </p>
                <p className="text-base leading-7">
                We believe that when teams are truly empowered, they can overcome any challenge, boost productivity, and drive meaningful impact within their organizations. That’s why we develop solutions that strengthen communication, streamline workflows, and create an environment that enables strategic decision-making.
                </p>
                <p className="text-base leading-7">
                The future of work is built on synergy, adaptability, and innovation. Our mission is to support teams on this journey, providing them with the foundation they need to thrive.
                </p>
              </div>
            </div>
  
            {/* Stats section */}
            
          </div>
        </div>
      </div>
    )
  }
  