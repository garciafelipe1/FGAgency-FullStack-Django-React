export default function Header() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-6xl">
                Careers at FG, Inc
              </h1>
              <p className="text-xl max-w-xl leading-relaxed text-gray-800 text-center md:text-left">
              Welcome to the FG job portal! Join us to become a part of one of the most great IT companies in your career. A team with a clear vision, strong work ethic, and a lot of passion to the work that we do every day.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/736x/af/38/d2/af38d22870dff375c2c77b03cf3636ef.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/e1/49/51/e14951d16d03a2e44fb6f779601dd1eb.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/71/ca/fe/71cafe36ef3dcf28e934e930a3cd0056.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/db/27/1d/db271dcb884fac0554c46a75089e8aef.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-86 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/54/ba/4f/54ba4fb215fb7c33f9ae709734cd0a87.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/a7/6f/54/a76f5428a8f453edc3e7dc23c9a58c12.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/7f/36/a3/7f36a36fe1c2782958ee30d41d827fef.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  