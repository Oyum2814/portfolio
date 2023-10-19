import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
     className="w-screen h-screen flex justify-center items-center"> 
      <Navbar />
      <div className="lg:h-[90vh] lg:absolute z-10 top-0 w-[90vw] ml-[10vw]  flex  justify-center items-center h-auto lg:pb-[10vh]
      lg:w-full lg:ml-0 lg:flex-col">
          <img src="https://images.unsplash.com/photo-1697222691126-c1be7bde3ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2748&q=80" 
          alt="" className="w-[50vw] h-[50vw] lg:rounded-lg object-cover fadeInElement opacity-100 transition duration-5000 ease-in-out"/>
          <div className="flex flex-col justify-center items-center fadeInElement opacity-100 transition duration-100 ">
            <div className="text-white text-4xl text-center mt-6">Hey There! <br />I am <span className="text-blue-400">Om!</span></div>
            <div className="text-white text-center mt-5 max-w-[70%] ">I am a Full Stack Web Developer pursuing my 3rd Year of Bachelors from SRM Institute of Science and Technology in Computer Science.</div>
            <a target="_blank" href="https://linktr.ee/oyumcodes" rel="noopener noreferrer" className="mt-8 text-white text-center px-4 py-2 bg-blue-400 rounded-md">My Social Profiles</a>
          </div>  
       
      </div>
    </main>
  )
}
