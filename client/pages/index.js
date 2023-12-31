import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'
import SmallCardv2 from '@/components/SmallCardv2'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(item => (
              <SmallCardv2 key={item.img} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
              
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map(item => (
                <MediumCard key={item.img} img={item.img} title={item.title}/>
              ))}
          </div>    
          
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  const exploreData = await fetch('https://3fwtbm1v-5004.euw.devtunnels.ms/api/locations').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://3fwtbm1v-5004.euw.devtunnels.ms/api/types').then(
    res => res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}