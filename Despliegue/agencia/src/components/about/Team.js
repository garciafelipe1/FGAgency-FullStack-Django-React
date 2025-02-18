const people = [
  {
    name: 'Lucas Gonzales',
    role: 'Front-end Developer',
    imageUrl:
      'https://i.pinimg.com/736x/e5/34/89/e534899b33c1ec7d7f5be697d65c49e1.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Luis Ancejo',
    role: 'Back-end Developer',
    imageUrl:
      'https://i.pinimg.com/736x/e9/be/a1/e9bea136174ea8047de1a7b8f4f6dbfb.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Juan Carlos Mena',
    role: 'UX Designer',
    imageUrl:
      'https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  
  
  
  // Más personas...
];

export default function Team() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-modern tracking-tight sm:text-3xl">Our Team</h2>
          <p className="text-xl text-gray-500">
            Meet our talented team of professionals.
          </p>
        </div>
        <div className=" md:grid-cols-2 gap-6">
          {/* Primera lista de personas */}
          <ul role="list" className="grid grid-cols-2 sm:grid-cols-3 ">
            {people.map((person) => (
              <li key={person.name} className="space-y-6">
                <div className="flex space-x-2 items-center">
                  <img className="rounded-lg object-cover shadow-lg w-36 h-60" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-lg font-modern">{person.name}</h3>
                    <p className="text-orange-700">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        
        </div>
      </div>
    </div>
  );
}
