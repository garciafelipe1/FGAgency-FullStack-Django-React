import Clients from "components/about/Clients"
import Features from "components/about/Features"
import Header from "components/about/Header"
import Images from "components/about/Images"
import ImagesJunior from "components/about/Images2"
import ServicesListJunior from "components/about/ServiceList2"
import Team from "components/about/Team"
import TestStats from "components/about/TestStats"
import LogoCloud from "components/home/LogoCloud"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import ServicesList from "components/services/ServicesList"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';


const posts_software  = [
  { 
    title:  'Javascript Developers',
    img: 'https://cdn-icons-png.flaticon.com/256/16103/16103299.png',
    href: '/servicios/javascript',
    category: { name: 'Development', href: '#' },
    description:
      'Talented  and Agile Javascript developers for your project, available 24/7.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Product Refresh',
    href: '#',
    img: 'https://cdn-icons-png.flaticon.com/256/8787/8787141.png',
    category: { name: 'Video', href: '#' },
    description:
      'We upgrade your product or service with the latest technology, ensuring it meets modern digital standards.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Full-Cycle Product Development',
    href: '#',
    img: 'https://cdn-icons-png.flaticon.com/256/8750/8750730.png',
    category: { name: 'Case Study', href: '#' },
    description:
      'FG Agency helps you bring ideas to life, from concept to design, development, and support.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const posts_design = [
  {
    title: 'Digital Products Design',
    img: 'https://cdn-icons-png.flaticon.com/256/7889/7889817.png',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Best practices and tools for designing intuitive and user-centric digital products.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Branding Strategy',
    href: '#',
    img: 'https://cdn-icons-png.flaticon.com/256/17227/17227794.png',
    category: { name: 'Video', href: '#' },
    description:
      'Key strategies to build a strong, distinctive, and engaging brand identity.',
  },
  {
    title: 'Outstaffing and Offshoring',
    href: '#',
    img: 'https://cdn-icons-png.flaticon.com/256/8452/8452029.png',
    category: { name: 'Case Study', href: '#' },
    description:
      'Insights into the benefits and challenges of remote workforce management.',
  },
];

function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
          <Helmet>
            <title>FG | Contact us</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.garcia.com/" />
            <meta name="author" content='Garcia' />
            <meta name="publisher" content='Garcia' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Garcia | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.garcia.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Garcia | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

            <Navbar/>
            <div className="pt-28">
                <Header/>
                <TestStats/>
                <LogoCloud/>
                <Images/>
                
                <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                    
                    
                </div>
                </div>
                <ServicesListJunior posts={posts_design} />
                <ServicesListJunior posts={posts_software} />
                <Team/>
                <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-16">
                  <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-4xl xl:max-w-none">
                  <h2 className="text-3xl font-modern tracking-tight sm:text-3xl">Our Approachess</h2>
                  <p className="text-sm text-gray-400">
                  We believe that to build a product without a deep business and audience research is the same as shooting in the dark with the fingers crossed. Our expert team takes a systematic approach to develop digital experiences that step-by-step lead a business to success.  We believe that product usability is like love. You should care, listen, and you have to be willing to change and fix your infelicities. So we pay particular attention to user testing and aim to deliver better products that will be quickly-loved by people.
                  </p>
                  </div>
                </div>
                
                <ImagesJunior/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default About