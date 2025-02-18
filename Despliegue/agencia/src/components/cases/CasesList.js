import CaseCard from "./CaseCard"
import Carousel from '@itseasy21/react-elastic-carousel';



function CasesList(){

    const posts = [
        {
            id:'1234-qwer',
          title: 'Garcia.com',
          href: '/casos/ecommerce',
          category: { name: 'Ecommerce'},
          description:
            'Ecommerce Website for Garcia.com',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://i.pinimg.com/736x/01/8a/4f/018a4f1509eeb2689b7d07a9cc7f89ba.jpg',
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
            'https://i.pinimg.com/736x/cc/1e/39/cc1e3975c4cd84854ec4c72d52ab6995.jpg',
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
            'https://i.pinimg.com/736x/1c/90/e5/1c90e54c827284f57c8f738a9b612b6a.jpg',
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

    return(
        <div className="relative px-2 pt-6 pb-16 sm:px-4 lg:px-10 lg:pb-20">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-full">
          
          <Carousel
                itemsToScroll={2}
                itemsToShow={2}
                breakPoints={breakPoints}
                pagination={false}
                itemPadding={[0, 48]}
                renderArrow={({ type, onClick }) => (
                  <button 
                    onClick={onClick}
                    
                    style={{
                      position: "relative",
                      top: "-150px", // Ajusta según lo necesites
                      
                    }}
                  >
                    {type === "PREV" ? "◀" : "▶"}
                  </button>
                )}
              
            >
          
            {posts.map((post, index) => (
              <CaseCard index={index} data={post}/>
            ))}
            </Carousel>
        </div>
      </div>
    )
}
export default CasesList