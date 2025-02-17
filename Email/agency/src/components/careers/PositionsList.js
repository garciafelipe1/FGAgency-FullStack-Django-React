import { motion } from "framer-motion";
import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

const applications = [
    {
      applicant: {
        name: 'Ricardo Araneda',
        email: 'ricardoaraneda@gmail.com',
        imageUrl: 'https://i.pinimg.com/736x/4b/2d/24/4b2d2488c340bc992bc54e2c42863026.jpg',
      },
      date: '2020-01-07',
      dateFull: 'January 7, 2020',
      stage: 'Interview Scheduled',
      href: '#',
    },
    {
      applicant: {
        name: 'Jose Ramos',
        email: 'joseramos@gmail.com',
        imageUrl: 'https://i.pinimg.com/736x/1c/20/d0/1c20d08dced11188826cc789a8db70a7.jpg',
      },
      date: '2020-01-07',
      dateFull: 'February 2, 2025',
      stage: 'Technical Assessment Completed',
      href: '#',
    },
    {
      applicant: {
        name: 'Luis Garcez',
        email: 'luisgarcez@gmail.com',
        imageUrl: 'https://i.pinimg.com/736x/70/5a/2c/705a2c53fa0b166937c6847410ccb3d5.jpg',
      },
      date: '2020-01-07',
      dateFull: 'December 23, 2024',
      stage: 'Final Interview Pending',
      href: '#',
    },
];

function PositionsList() {
    return (
        <div className="max-w-full mx-4 lg:mx-12 bg-white">
            <h2 className="text-3xl font-modern text-gray-900 pb-8">Positions Applied</h2>
            <p className="text-1xl font-modern text-gray-700 max-w-4xl leading-2">
                Let's write some beautiful code and make smart designs. This is what we're crazy about, and we're looking for the ones who feel the same.
            </p>

            <div className="grid grid-cols-12 pt-6">
                <div className="col-span-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                        defaultValue="Canada"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>Argentina</option>
                    </select>
                </div>
            </div>

            <div className="overflow-hidden bg-white shadow sm:rounded-md py-12">
                <motion.ul 
                    role="list" 
                    className="divide-y divide-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}
                >
                    {applications.map((application, index) => (
                        <motion.li 
                            key={application.applicant.email}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <a href={application.href} className="block hover:bg-gray-50">
                                <div className="flex items-center px-4 py-4 sm:px-16">
                                    <div className="flex min-w-0 flex-1 items-center">
                                        <div className="flex-shrink-0">
                                            <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="truncate text-sm font-medium text-black-600">{application.applicant.name}</p>
                                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                                    <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="truncate">{application.applicant.email}</span>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div>
                                                    <p className="text-sm text-gray-900">
                                                        Applied on <time dateTime={application.date}>{application.dateFull}</time>
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                                                        {application.stage}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}

export default PositionsList;
