const incentives = [
    {
      name: 'JavaScript',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/4325/4325483.png',
      description: "Our team uses agile methodologies to optimize every stage of development. We prioritize transparency, communication, and collaboration to create high-quality solutions tailored to your needs.",
    },
    {
      name: 'Python',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/2/2181.png',
      description: "Our digital product studio specializes in Python development, ensuring that our teams stay up to date with the latest industry standards and best practices. We have extensive experience working with Python libraries and frameworks, allowing us to create efficient, scalable, and user-friendly digital solutions.",
    },
    {
      name: 'Experienced Designers',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/644/644576.png',
      description:
        "At FG digital product development agency, designers work closely with the development team to create engaging and functional user interfaces. We employ a user-centered approach to ensure your product’s design aligns with your business goals, brand identity, and target audience. It’s no surprise that we have been ranked among the top 10 design studios on Dribbble.",
    },
    {
      name: 'Experienced Designers',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/644/644576.png',
      description:
        "At FG digital product development agency, designers work closely with the development team to create engaging and functional user interfaces. We employ a user-centered approach to ensure your product’s design aligns with your business goals, brand identity, and target audience. It’s no surprise that we have been ranked among the top 10 design studios on Dribbble.",
    },
    {
      name: 'Experienced Designers',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/644/644576.png',
      description:
        "At FG digital product development agency, designers work closely with the development team to create engaging and functional user interfaces. We employ a user-centered approach to ensure your product’s design aligns with your business goals, brand identity, and target audience. It’s no surprise that we have been ranked among the top 10 design studios on Dribbble.",
    },
    {
      name: 'Experienced Designers',
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/644/644576.png',
      description:
        "At FG digital product development agency, designers work closely with the development team to create engaging and functional user interfaces. We employ a user-centered approach to ensure your product’s design aligns with your business goals, brand identity, and target audience. It’s no surprise that we have been ranked among the top 10 design studios on Dribbble.",
    },
    
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-mathsans tracking-tight text-gray-900">
                Why should you choose FG digital product agency?
              </h2>
              <p className="mt-4 text-gray-500">
              We bring digital experiences to life with a strategic and creative approach. Our team of 50 visual interaction and technology specialists has worked for over six years driving ideas and taking projects to the next level.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }