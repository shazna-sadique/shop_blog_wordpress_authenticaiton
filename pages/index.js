import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from '../components/Header';

export default function Home() {
  return (
   <>
      <Header/>
      <Head>
        <title>PLANET MEDIA</title>
        <meta name="description" content="Your page description" />
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <h1>Shop</h1>
        </div>
      </section>
      </>
  )
}


