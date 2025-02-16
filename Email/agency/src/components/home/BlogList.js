const posts = [
  {
    title: 'Mastering UX: How to Create Seamless User Experiences',
    href: '#',
    category: { name: 'Design', href: '#', color: 'bg-blue-100 text-blue-800' },
    description:
      'Discover the key principles behind user experience and how to enhance usability across digital platforms.',
    date: 'Jan 22, 2024',
    datetime: '2024-01-22',
    author: {
      name: 'John Carter',
      href: '#',
      imageUrl:
        'https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg',
    },
    readingTime: '8 min',
  },
  {
    title: 'AI in Marketing: The Future of Personalized Advertising',
    href: '#',
    category: { name: 'Tech', href: '#', color: 'bg-red-100 text-red-800' },
    description:
      'Explore how artificial intelligence is transforming marketing strategies and creating hyper-personalized experiences.',
    date: 'Feb 5, 2024',
    datetime: '2024-02-05',
    author: {
      name: 'Liam Thompson',
      href: '#',
      imageUrl:
        'https://i.pinimg.com/736x/8d/e6/21/8de621e960298a6c9374933bbd91a69d.jpg',
    },
    readingTime: '5 min',
  },
  {
    title: 'Cybersecurity Trends in 2024: Staying Ahead of Threats',
    href: '#',
    category: { name: 'Security', href: '#', color: 'bg-gray-100 text-pink-800' },
    description: 'A look at emerging cybersecurity threats and best practices to protect your data and privacy.',
    date: 'Apr 8, 2024',
    datetime: '2024-04-08',
    author: {
      name: 'Michael Brown',
      href: '#',
      imageUrl:
        'https://i.pinimg.com/736x/51/3f/63/513f63a00960b3c71cca5b20ad84d80d.jpg',
    },
    readingTime: '6 min',
  },
  
];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function BlogList() {
    
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto lg:mx-4 max-w-lg divide-y-2 divide-gray-200 lg:max-w-full">
          <div>
            <h2 className=" text-3xl font-mathsans tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Explore groundbreaking trends, expert opinions, and inspiring success stories that shape the future of our industry.
            </p>
          </div>
          <div className=" grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }