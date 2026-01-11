import { useEffect, useState } from 'react'
import { getCards } from '../api/card'
import Product from '../component/card/Product'
import { getTestimoni } from '../api/testimoni'
import Testimoni from '../component/card/Testimoni'
import { getBlogs } from '../api/blog'
import BlogCard from '../component/card/Blog'


const Home = () => {
    const [cards, setCards] = useState([])
    const [testimoni, setTestimoni] = useState([])
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
  setLoading(true)

  Promise.all([
    getCards(),
    getTestimoni(),
    getBlogs(),
    fetch("http://localhost:5000").then(res => res.text())
  ])
    .then(([cardsRes, testimoniRes, blogRes, backendMsg]) => {
      setCards(cardsRes.data)
      setTestimoni(testimoniRes.data)
      setBlog(blogRes.data)

      console.log("Backend response:", backendMsg)
    })
    .catch((err) => console.error("Error fetching data:", err))
    .finally(() => setLoading(false))
}, [])

  return (
    <section id='hero'>
        {/* HERO */}
            <section className='relative h-screen bg-cover bg-center z-0' style={{backgroundImage: "url('/heroimage.webp')"}}>
            <div className='absolute inset-0 bg-black/55 z-0 pointer-events-none'></div>
            <div className='flex flex-col h-full items-start justify-center z-10 relative max-w-7xl mx-auto px-6'>
                <div className='flex  gap-2 items-center mb-2'>
                <div className='w-4 h-0.5 bg-slate-100 mt-32 md:mt-0'></div>
                <h1 className='text-sm text-slate-100 pt-32 md:pt-0'>30+ outlet. Dikelola profesional. Siap Ekspansi</h1>
                </div>
                <div className='mb-5'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3  leading-14'>Menyalakan Ambisi, Satu <span className='block'>Cangkir Setiap Saat</span></h1>
                    <p className='text-slate-50 max-w-xl text-sm'>Entah untuk memulai hari atau sekadar rehat sejenak, KOFVEE adalah ruang hangat yang terasa akrab, tenang, dan nyaman—seperti pulang ke rumah sendiri, tempat waktu berjalan lebih pelan dan cerita bisa beristirahat sejenak.</p>
                </div>
                <div className='flex gap-10'>
                    <a className='border py-2 px-6 border-white text-white rounded-lg font-semibold'>Outlet Kofve</a>
                    <a href='#produk' className='bg-white  py-2 px-6 rounded-lg font-semibold'>Produk Kofve</a>
                </div>
            </div>
            </section>

        {/* ABOUT  */}
        <section className='py-20 relative ' style={{backgroundImage: "url('bg-kertas.avif')"}} id='about'>
            <div className='absolute inset-0 bg-white/74 bg-linear-to-t from-white/50 via-white/50 to-white20'></div>
            <div className='max-w-6xl mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
                <div className='pt-5 z-10'>
                    <h1 className='text-4xl lg:text-5xl font-bold  mb-6'>Crafted with passion, <br /> brewed with precision.</h1>
                    <p className='text-sm text-slate-600 font-md mb-6 '>Kofvee merupakan brand spesialisasi kopi dengan konsep “Made to Order” yang menyajikan Fresh Quality Coffee. Dengan menggunakan 100% biji kopi asli Indonesia yang disajikan oleh barista terlatih dengan mesin kopi standar internasional. Berdiri sejak tahun 2016, dan kini sudah hadir tersedia di lebih dari 20 outlet di seluruh Jawa Barat untuk mempermudah Point People menjangkau Point Coffee</p>
                    <button className=' py-2 px-6 bg-green-800 text-white font-semibold rounded-lg'>Lihat Selengkapnya</button>
                </div>
                        <div className='relative flex justify-end'>
                            <img src="/about1.jpeg" alt="" className='rounded-lg w-md items-right' />
                            <div className='absolute inset-0 bg-linear-to-t from-white/50 via-white/0 to-transparent '></div>
                        </div>
                </div>
            </div>
        </section>

        {/* PRODUK */}
        <section className='py-10 md:PY-20' id='produk'>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
                    <h2 className='text-3xl md:text-5xl font-bold'>Best Menu</h2>
                    <div className='text-right'>
                        <p className='text-sm md:text-md mb-10 font-medium text-slate-800'>Temukan menu andalan kami yang paling digemari, mulai dari minuman segar hingga makanan pendamping dengan cita rasa istimewa</p>
                        <button className='items-right py-2 px-6 bg-green-800 text-white font-semibold rounded-md mb-4'>Menu Lainnya</button>
                    </div>
                </div> 
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                     {cards.map((item) => (
                       <Product key={item.id} item={item} />
                     ))}
                </div>
            </div>
        </section>

        {/* PROMOSI */}
        <section className='mb-20 hidden md:block' >
            <div className='max-w-6xl mx-auto px-4'>
                <div className="bg-green-800 rounded-3xl px-10">
                    <div className='grid grid-cols-1 md:grid-cols-2 h-72 md:h-80 items-stretch'>
                        <div className='text-white flex flex-col justify-center'>
                            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Discover Our Menu <br />Coffe Lovers Unit</h1>
                            <p className='text-white/80 mb-6'>Nikmati setiap tegukan kopi Kofvee yang dibuat dari biji pilihan terbaik. Dari espresso yang kaya hingga latte yang lembut, temukan minuman favoritmu dan rasakan pengalaman kopi yang tak terlupakan.</p>
                                <div className='flex gap-6'>
                                    <button className='py-2 px-4 rounded-lg bg-white text-black font-medium'>Best Menu</button>
                                    <button className='border border-white rounded-lg text-white py-2 px-4'>Pesan Sekarang</button>
                                </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="/produkpromo1.png" alt="" className='h-full max-h-72 md:max-h-80 object-contain scale-150' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* TESTIMONI */}
        <section className='py-20 bg-slate-50' id='testimoni'>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-5'>Testimoni Pengunjung</h1>
                <p className='text-sm  text-slate-700 text-center max-w-xl mx-auto mb-15'>Temukan pengalaman nyata para penggemar kopi Kofvee. Dari kesan pertama hingga rasa yang selalu diingat, setiap komentar mereka menceritakan kenikmatan kopi kami.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimoni.map(item => (
                        <Testimoni key={item.id} data={item}/>
                    ))}
                </div>
            </div>
        </section>

        <section className='py-20' id='galery'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-2'>Behin Thew Brew</h2>
                <p className='text-sm text-slate-700 max-w-lg text-center mx-auto mb-5'>Intip momen-momen di balik setiap cangkir Kofvee  dari biji pilihan hingga teknik seduh, setiap foto menceritakan perjalanan kopi kami.</p>
                <div className='flex items-center gap-5 mx-auto justify-center mb-12 text-center'>
                    <button className='bg-green-800 py-2 px-4 rounded-lg text-white font-bold'>@Kofvee.id</button>
                    <button className='py-2 px-4 rounded-lg font-bold border border-slate-950'>@Kofvee.id</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center justify-center">
                    <img src="galeri1.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri2.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri3.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri4.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri5.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri6.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri7.jpg" alt="" className='rounded-lg h-82 w-82' />
                    <img src="galeri8.jpg" alt="" className='rounded-lg h-82 w-82' />
                </div>
            </div>
        </section>

        {/* BLOG */}
        <div className='py-14' id='blog'>
           <div className="max-w-6xl mx-auto px-4 mb-20">
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Blog Terbaru</h2>
            <div className='border-b-2 border-gray-200 w-full mt-4 mb-8'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
                <div>
                    <img src="/blog1.jpg" alt="" className='rounded-lg' />
                </div>
                <div className='p-4'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-5 text-slate-800'>Grand Opening Kofvee Rancasari Bandung</h2>
                    <p className='text-sm text-slate-700 mb-2'>Kami dengan bangga mengundang semua pecinta kopi untuk merayakan pembukaan cabang terbaru Kofvee di Rancasari, Bandung! Nikmati berbagai menu kopi spesial, promo menarik, dan suasana hangat yang membuat setiap kunjungan tak terlupakan.</p>
                    <p className='text-sm text-slate-700 mb-5'>Datang dan rasakan langsung cita rasa kopi Kofvee yang autentik, dari biji pilihan hingga setiap tegukan penuh kenikmatan. Jangan lewatkan momen spesial ini bersama teman dan keluarga!</p>
                    <button className='py-2 px-6 bg-green-800 text-white rounded-lg font-bold'>Baca Selengkapnya</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blog.map(item => (
                   <BlogCard key={item.id} data={item} />
                 ))}
            </div>
           </div>
        </div>
    </section>
  )
}

export default Home
