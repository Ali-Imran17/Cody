import React from 'react';
import { FiTwitter, FiPhoneCall, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
     <div className="relative min-h-screen transition-colors text-white font-sans selection:bg-orange-500/30 overflow-hidden">
    
      <div className="absolute inset-0 bg-[#4b1f00] 
        bg-[repeating-linear-gradient(90deg,#5a2400_0px,#5a2400_60px,#4b1f00_60px,#4b1f00_120px)]">
      </div>
   

      <div className="absolute inset-0
        bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_75%,black_100%)]">
      </div>
      <div className="relative z-10">

   <section className="relative  flex flex-col items-center pt-10 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 80px, #4a2b00 80px, #4a2b00 81px)' }}>
        </div>
        <div className="absolute inset-0 "></div>

        <Link href='/' className="absolute top-12 left-10 z-20 bg-linear-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] text-white font-black tracking-widest text-xl cursor-pointer">
          Cody
        </Link>

      <nav className="z-50 relative bg-neutral-900 backdrop-blur-2xl border border-white/30 px-4 md:px-8 py-3 rounded-full mb-16 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]">
            <input type="checkbox" id="menu-toggle" className="hidden peer " />
            <div className="flex justify-between items-center">
              <ul className="hidden md:flex gap-6 md:gap-8 text-sm font-bold tracking-wide text-white">
                <Link href='/' className='hover:text-amber-600'>Home</Link>
                <Link href='/AboutUs' className='hover:text-amber-600'>About</Link>
                <Link href='/CodyCommerce' className='hover:text-amber-600'>Cody</Link>
                <Link href='/Pricing' className='hover:text-amber-600'>Pricing</Link>
                <Link href='/Contact' className='hover:text-amber-600'>Contact</Link>
              </ul>
              <label htmlFor="menu-toggle" className="md:hidden ml-auto text-white text-2xl cursor-pointer">☰</label>
            </div>
            <div className="absolute left-1 top-16 w-52 bg-neutral-900 border border-white/20 rounded-2xl p-6 flex-col gap-4 text-white hidden peer-checked:flex md:hidden">
              <Link href='/' className='hover:text-amber-600'>Home</Link>
              <Link href='/AboutUs' className='hover:text-amber-600'>About</Link>
              <Link href='/CodyCommerce' className='hover:text-amber-600'>Cody</Link>
              <Link href='/Pricing' className='hover:text-amber-600'>Pricing</Link>
              <Link href='/Contact' className='hover:text-amber-600'>Contact</Link>
            </div>
          </nav>
</section>
<h1 className='text-9xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat neque eligendi cupiditate asperiores, fugit earum ut sequi fuga natus ad quo repudiandae harum nihil tempora quos voluptas, commodi id necessitatibus!</h1>
  <footer className="py-20 mt-4 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

            {/* Contact Inputs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-neutral-900 backdrop-blur-2xl border border-white/30 p-4 rounded-xl">
                <div className="text-[#FF8D28] text-2xl"><CiMail /></div>
                <input type="text" placeholder='loremipsum@mail.com' className='bg-transparent border-none focus:outline-none focus:ring-0 w-full'/>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900 backdrop-blur-2xl border border-white/30 p-4 rounded-xl">
                <div className="text-[#FF8D28] text-2xl"><FiPhoneCall /></div>
                <input type="tel" placeholder='+1 000-020-4444' className='bg-transparent border-none focus:outline-none focus:ring-0 w-full' />
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center mx-auto md:text-left md:mx-0 md:ml-20">
              <h4 className="text-[#FF8D28] font-bold mb-6 tracking-widest text-2xl">Quick Links</h4>
              <div className="space-y-2 text-sm font-bold -mt-2 grid text-white justify-center md:justify-start">
                <Link href='/AboutUs' className="hover:text-amber-500 transition-colors">About Us</Link>
                <Link href='/CodyCommerce' className="hover:text-amber-500 transition-colors">Cody Commerce</Link>
                <Link href='/Pricing' className="hover:text-amber-500 transition-colors">Pricing</Link>
                <Link href='/Contact' className="hover:text-amber-500 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 text-[#FF8D28] w-fit mx-auto md:ml-auto md:mr-0">
              <Link href='/' className='hover:text-white flex justify-center'><FaInstagram size={40} /></Link>
              <Link href='/' className='hover:text-white flex justify-center'><FiTwitter size={40} /></Link>
              <Link href='/' className='hover:text-white flex justify-center'><FiLinkedin size={40} /></Link>
              <Link href='/' className='hover:text-white flex justify-center'><LuFacebook size={40} /></Link>
            </div>

          </div>

          <div className="w-full mt-24 max-w-4xl mx-auto border-t border-[#7B7878]"></div>
        </footer>
</div></div>



  )
}

export default Contact
