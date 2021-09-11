import Head from 'next/head'
import Image from 'next/image'
import All_product from '../components/All_products'
import Header from '../components/Header'
import HomeCard from '../components/HomeCard'
// import Text from '../components/Text'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />

       {/* <Text /> */}
       <HomeCard />
       <All_product />
  </>
  )
}
