import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { FAQEntity } from '../model/faq'
import GET_FAQS from './api/queries'
import client from './api/client'

interface IndexProps{
  faqs: Array<FAQEntity>
}

const Home: NextPage<IndexProps> = (props: IndexProps) => {
  console.log(props.faqs)
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <div className="max-w-[400px] max-h-[200px] self-center text-center">
        <h1 className="text-4xl bg-black text-white font-bold tracking-widest px-6 py-6">Frequently Asked Questions</h1>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const { data } = await client.query({query: GET_FAQS})

  return{ props: { faqs: data.faqs.data }}

}

export default Home
