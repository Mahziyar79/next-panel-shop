import Image from 'next/image'
import heroBgSVG from "../../assets/images/hero-bg.svg";

export default function Home() {
  return (
   <main className='flex-1'>
    <Image src={heroBgSVG} className='absolute left-0 top-0 hidden md:block' />
   </main>
  )
}