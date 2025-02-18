import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Features() {
  return (
    <div className="bg-white">
  <div className="mx-4 max-w-full py-16 px-4 sm:px-6 lg:px-8 lg:py-0 lg:grid lg:grid-cols-2 lg:gap-12">
    
    {/* Sección de Texto */}
    <div className="flex flex-col self-start max-w-lg pb-6">
    <p className="mb-4 text-4xl font-mathsans tracking-tight text-gray-900">
      We build more than just apps
    </p>
    <p className="mb-2 text-lg text-gray-600">
    At FG, we are more than a digital product design agency—we are your partners in innovation. With a team of 50+ JS and design experts and over 6 years of experience, we specialize in crafting digital solutions from the ground up and enhancing existing projects.
    </p>
    <p className="mb-2 text-lg text-gray-600">
    Since 2013, we have been delivering top-tier design, development, and branding services to global companies and startups. From the first concept to product launch and beyond, we ensure seamless execution and post-launch support.
    </p>
    <p className="mb-2 text-lg text-gray-600">
    With 700+ successful projects worldwide, we empower businesses with cutting-edge digital solutions. Now, we invite you to be part of this journey. Let’s build something extraordinary together.  
    </p>
    
  </div>

    {/* Sección de Features */}
    <div className="mt-4 lg:mt-0">
      <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIcon className="absolute h-4 w-4 text-green-500" aria-hidden="true" />
              <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>

  </div>
</div>

  )
}