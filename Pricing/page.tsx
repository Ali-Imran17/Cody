import React from 'react';
import { FiTwitter, FiPhoneCall, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
import { MdDoNotDisturbOn } from "react-icons/md";

1
const Pricing = () => {
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

 <div className="mt-28 text-center">
            <h2 className="text-3xl md:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">COST is NON Existent</h2>
            <p className="text-sm whitespace-nowrap mt-2 md:text-xl">The reality is, you profit from us. We are dead serious about this model.<br/>Dive into the logistics in the section that follows.</p>
</div>
 <div className="mt-50 text-center">
            <h2 className="text-3xl md:text-5xl drop-shadow-amber-600/40 drop-shadow-lg font-medium text-[#FF8D28]">Rise Above the Chaos</h2>
            <p className="text-sm whitespace-nowrap mt-2 md:text-xl">The reason our framework provides superior results compared to<br/>alternative platforms.</p>
</div>

   <div className="h-150 w-7xl mt-30 border-2 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] border-white/30 ml-30 rounded-4xl  bg-linear-to-b from-[#331d0a] to-[#652c0b]/50 flex items-center justify-center p-6">
  <div className="relative w-full max-w-7xl mx-auto rounded-4xl border shadow-[inset_0_-10px_30px_rgba(96,40,9,5)] border-b-[#EEFF00]/40 border-white/20  bg-linear-to-b from-[#121212] to-[#2e1111]  overflow-hidden">

        {/* MAIN TABLE GRID */}
        <div className="grid grid-cols-6 text-sm text-gray-300">

          {/* LEFT FEATURE TABLE */}
          <div className="border-r border-white/10  ">
            <div className='p-11 border-b mt-5 border-white/10'></div>
            {/* Row 1 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-white text-xl font-semibold mb-1">Strategic <br/> Guidance</h3>
         
            </div>

            {/* Row 2 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-white text-xl text-nowrap font-semibold mb-1">Sales & Brand <br/> Control</h3>
             
            </div>

            {/* Row 3 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-white text-xl font-semibold mb-1">Fulfillment & Logistics</h3>
              
            </div>

            {/* Row 4 */}
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-1">Ecosystem Protection</h3>
              
            </div>
          </div>

          {/* COLUMN 1 */}
            <div className=" ">
            <div className='p-11 border-b mt-5 border-white/10'></div>
            {/* Row 1 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-white text-sm text-nowrap ">
                High Level Growth Strategy <br/> 1-1 Dedicated Expert<br/>Strict MAP Compliance</h3>
         
            </div>

            {/* Row 2 */}
            <div className="p-3 border-b mt-6 border-white/10">
             <h3 className="text-white text-sm tracking-wider text-nowrap ">
                Complete Catalog Optimization <br/> High Volume Purchase Order<br/>Full Data Transparency</h3>
             
            </div>

            {/* Row 3 */}
            <div className="p-6 border-b border-white/10">
             <h3 className="text-white text-sm tracking-wider text-nowrap ">
                Custom Prep & Labeling<br/> Accelerated Prime Delivery<br/>End to End Returns Management</h3>
              
            </div>

            {/* Row 4 */}
            <div className="p-6">
            <h3 className="text-white text-sm tracking-wider text-nowrap ">
                Strict Platform Compliance <br/> Listing Hijacker Protection<br/>Proactive Account Health<br/>Advance PPC Scaling</h3>
              
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="border-r border-white/10  ">
            <div className='p-11 border-b mt-5 border-white/10'></div>
            {/* Row 1 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-transparent text-xl font-semibold mb-1">Strategic <br/> Guidance</h3>
         
            </div>

            {/* Row 2 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-transparent text-xl font-semibold mb-1">Sales & Brand Control</h3>
             
            </div>

            {/* Row 3 */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-transparent text-xl font-semibold mb-1">Fulfillment & Logistics</h3>
              
            </div>

            {/* Row 4 */}
            <div className="p-6">
              <h3 className="text-transparent text-xl font-semibold mb-1">Ecosystem Protection</h3>
              
            </div>
          </div>

          {/* COLUMN 3 */}
     {/* COLUMN 3 */}
<div className="border-r  border-white/10 text-center flex flex-col">
  <div className="p-8.25 border-b ml-6  border-white/10 text-lg text-[#929292]"><h1 className=''>1P Vendor Control</h1></div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center mb-7 gap-2">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>
</div>

{/* COLUMN 4 */}
<div className="border-r border-white/10 text-center flex flex-col">
  <div className="p-8.25 border-b border-white/10 text-lg text-[#929292]">Traditional 3P Resellers</div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center mb-7 gap-2">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>
</div>

{/* COLUMN 5 */}
<div className="text-center flex flex-col">
  <div className="p-11.75 border-b border-white/10 text-lg text-[#929292]">In House</div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 border-b border-white/10">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>

  <div className="flex-1 flex flex-col justify-center items-center gap-2 mb-7">
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
    <span className="w-3 h-3 text-xl text-gray-500 rounded-full"><MdDoNotDisturbOn /></span>
  </div>
</div>

          
        </div>

{/* COLUMN 5 */}
   


        {/* CODY COLUMN (SEPARATE TABLE OVERLAY) */}
        <div className="absolute top-0 left-[37.5%]  w-55 h-full pointer-events-none">
          <div className="m-3 h-[calc(100%-24px)]  rounded-4xl bg-linear-to-b from-[#F27507] to-[#5E2F06] border-2 border-[#EEFF00] flex flex-col">

           <div className="p-5.5 text-center font-semibold text-white text-lg whitespace-nowrap border-b-4 border-[#0B0B0B]/50 [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
  Cody Commerce<br />Partnership
</div>

          <div className="flex-1 flex flex-col justify-center items-center border-b-4 border-[#0B0B0B]/50">
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
</div>

<div className="flex-1 flex flex-col justify-center items-center  border-b-4 border-[#0B0B0B]/50">
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
</div>

<div className="flex-1 flex flex-col justify-center items-center  border-b-4  border-[#0B0B0B]/50">
  
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
</div>

<div className="flex-1 flex flex-col justify-center items-center ">
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
  <span><span className="text-[#FFE100]">✔</span> Yes</span>
</div>
          </div>
        </div>

        {/* INNER GRID GLOW */}
        <div className="absolute inset-0 rounded-2xl border border-orange-400/20 pointer-events-none" />
      </div>
    </div>





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

export default Pricing
