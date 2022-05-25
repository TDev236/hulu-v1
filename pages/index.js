import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu - By - Tiffani Front</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}
      <Header/>
      {/** Navbar */}
      <Navbar/>
      {/**Resultadoss */}
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url }`
  ).then(res => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}