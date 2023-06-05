import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Marketing from './Marketing'

export default function AppLayout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Meta />
            <Header />
            <main className="flex-grow bg-gradient-to-r from-blue-500 to-blue-600">
               <Hero />
               <Marketing />
               <Services />
               <About />
               <Contact />
            </main>
            <Footer />
        </div>
    )
}