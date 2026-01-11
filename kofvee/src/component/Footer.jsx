import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-gray-200 w-full'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Flex yang responsive dengan spacing rapi */}
        <div className="flex flex-col md:flex-row md:justify-between py-8 md:gap-0 mb-10">
          
          <div className='md:w-1/4'>
            <h2 className='text-3xl md:text-4xl font-bold text-green-800 mb-2'>KOFVEE</h2>
            <p className='text-sm text-slate-600 max-w-xl'>
                Kami hadir untuk menghadirkan pengalaman kopi terbaik bagi semua pecinta kopi. Setiap momen bersama kami penuh kehangatan dan kenikmatan.
            </p>
          </div>

          <div className=''>
            <h2 className='text-lg font-bold mb-2'>Utama</h2>
            <ul className='flex flex-col text-sm text-slate-800 space-y-1'>
              <li>Tentang Kami</li>
              <li>Lokasi Store</li>
              <a href='#produk'>Produk & Menu</a>
              <li>Kolaborasi</li>
              <li>Berita & Artikel</li>
              <li>Karir</li>
            </ul>
          </div>

          <div className=''>
            <h2 className='text-lg font-bold mb-2'>Investor Hub</h2>
            <ul className='flex flex-col text-sm text-slate-800 space-y-1'>
              <li>Prospektus Ipo</li>
              <li>Laporan Tahunan</li>
              <li>Laporan Keuangan</li>
              <li>Kepemilikan Saham</li>
              <li>Cakupan Analis</li>
              <li>Profesi Penunjang</li>
            </ul>
          </div>

          <div className=''>
            <h2 className='text-lg font-bold mb-2'>Customer Service</h2>
            <ul className='flex flex-col text-sm text-slate-800 space-y-1'>
              <li>Online Purchase & Services</li>
              <li>Monday – Saturday</li>
              <li>(10.00 – 17.00 WIB)</li>
              <li>Whatsapp : 08112459889</li>
            </ul>
          </div>

        </div>
        <div className='border-t-2 border-gray-200 w-full mb-2'></div>
        <div className=' flex justify-between items-center mb-10 gap-20'>
            <h4 className='text-sm font-bold text-slate-400'>Copyright © Kovfee 2025. All rights reserved.</h4>
            <h4 className='text-sm font-semibold text-slate-400'>Kebijakan Privasi Berlaku</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
