

import styles from '../styles/Home.module.css'
import BestSellers from '../components/BestSellers';
import Categories from "../components/Categories"
import GeneralNotice from '../components/GeneralNotice'
import Imageslider from '../components/Imageslider'

export default function Home() {
  return (
  
    <>
    <Categories/>
    <Imageslider/> 
    <BestSellers title="Best Sellers"/>
    <BestSellers title="Best of Electronics"/>
    <BestSellers title="Best of Toys & More"/>
    <GeneralNotice/>

    </>
  )
}
