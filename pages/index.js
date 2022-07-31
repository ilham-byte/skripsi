import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import About from '../components/about'
import Order from '../components/order'

export default function Home() {
  return (
    <div className="relative">
	{/* <Head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Warungku</title>
	</Head> */}
	<Head>
		<title>WARUNGKU</title>
	</Head>
	{/* navbar */}
	<div className="sticky top-0 z-50">
		<Navbar></Navbar>
	</div>
	{/* about */}
	<section id="about">
		<About></About>
	</section>
	{/* order */}
	<section id="order">
		<Order></Order>
	</section>
	<Footer></Footer>
	</div>
  )
}
