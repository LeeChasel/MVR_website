import Head from 'next/head'
import TopNavbar from './components/topnavbar'
export default function Home() {
  return (
    <>
      <Head>
        <title>MVR-首頁</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-center m-5'>首頁</h1>
      </main>
    </>
  )
}
