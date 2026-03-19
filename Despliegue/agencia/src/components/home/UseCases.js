import CaseCard from "components/cases/CaseCard";
import Carousel from "@itseasy21/react-elastic-carousel";



function CasesList(){

    const posts = [
        {
            id:'1234-qwer',
          title: 'Diabetes Control',
          href: '/casos/ecommerce',
          category: { name: 'Ecommerce'},
          description:
            'Ecommerce Website for Garcia.com',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://i.pinimg.com/736x/da/6e/32/da6e32bad7c57e53e58de00fbc9a7d1b.jpg',
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id:'5678-asdf',
          title: 'Web Development',
          href: '/casos/web',
          category: { name: 'Programming' },
          description:
            'Tailored web solutions to enhance your business.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://i.pinimg.com/736x/71/f0/38/71f0389673bdf5021920c26be3ec3aab.jpg',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id:'4321-zxcv',
          title: 'Cibersecurity',
          href: '#',
          category: { name: 'Programming' },
          description:
          'Protect your data and systems with our advanced solutions.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://i.pinimg.com/736x/7c/f3/d5/7cf3d5190bcf625002bb5c392afa69c1.jpg',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ]

    const  breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1350, itemsToShow: 3, itemsToScroll: 3},
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
    ]

    return (
        <div className="relative px-4 pt-8 pb-20 sm:px-6 lg:px-10">
          <div className="relative mx-auto max-w-full">
            <Carousel
              itemsToScroll={2}
              itemsToShow={2}
              breakPoints={breakPoints}
              pagination={false}
              itemPadding={[0, 24]}
              renderArrow={({ type, onClick }) => (
                <button
                  type="button"
                  onClick={onClick}
                  className="absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 shadow-md transition hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  style={{ [type === "PREV" ? "left" : "right"]: "-12px" }}
                  aria-label={type === "PREV" ? "Anterior" : "Siguiente"}
                >
                  {type === "PREV" ? "‹" : "›"}
                </button>
              )}
            >
              {posts.map((post, index) => (
                <CaseCard key={post.id ?? index} index={index} data={post} />
              ))}
            </Carousel>
          </div>
        </div>
    );
}
export default CasesList