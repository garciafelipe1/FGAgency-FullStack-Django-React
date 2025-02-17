import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Innovation',
    description: 'We embrace creativity and forward-thinking to drive meaningful change and progress.',
  },
  {
    name: 'Collaboration',
    description: 'Working together with trust and transparency to achieve shared goals and success.',
  },
  {
    name: 'Excellence',
    description: 'Striving for the highest standards in everything we do, from ideas to execution.',
  },
  {
    name: 'Leadership',
    description: 'Inspiring and guiding with vision, responsibility, and a commitment to positive impact.',
  },
  {
    name: 'Commitment',
    description: 'Dedicated to delivering value, staying accountable, and exceeding expectations.',
  },
  {
    name: 'Integrity',
    description: 'Upholding honesty, ethics, and responsibility in every decision and action.',
  },
  {
    name: 'Resilience',
    description: 'Adapting to challenges with determination, agility, and a growth mindset.',
  },
  {
    name: 'Success Together',
    description: 'Achieving greatness through teamwork, shared vision, and collective effort.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="relative mx-auto  mt-8 max-w-lg mb-8 lg:max-w-full">
        <div className="mx-auto lg:mx-12 max-w-full ">
          <h2 className="text-3xl font-Modern tracking-tight text-gray-900">Cultures and Values</h2>
          <p className="mt-4 text-lg text-gray-500">
          Great achievements happen when vision, teamwork, and commitment align.
          </p>
        </div>
        <dl className="mt-6 space-y-10 lg:mx-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dd className='mt-2 ml-9 text-lg font-semibold text-black-500'>{feature.name}</dd>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
