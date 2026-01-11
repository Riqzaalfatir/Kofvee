const BlogCard = ({ data }) => {
  return (
    <div className="py-2 px-2 border border-slate-300 shadow-md rounded-xl bg-white flex flex-col justify-between">
      <div className="w-full h-52 overflow-hidden rounded-lg">
        <img
          src={data.gambar}
          alt={data.judul}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 mb-3 pt-4">
        <h3 className="font-bold mb-2 text-xl">{data.judul}</h3>
        <p className="text-sm text-slate-600 ">{data.deskripsi}</p>
      </div>
      <div className="bg-gray-100 flex items-center justify-between py-2 px-6 rounded-xl">
        <span className="text-sm text-gray-500">{data.kategori}</span>
        <span className="text-sm text-gray-500">{data.tanggal}</span>
      </div>
    </div>
  )
}

export default BlogCard
