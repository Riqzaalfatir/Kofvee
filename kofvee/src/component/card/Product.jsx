import { Link } from "react-router-dom"

const Product = ({ item }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className="py-2 px-2 border border-slate-300 shadow-md rounded-xl bg-white flex flex-col justify-between">
        
        <div className="w-full h-52 overflow-hidden rounded-lg">
          <img
            src={item.gambar}
            alt={item.judul}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="px-6 mb-3">
          <h3 className="font-semibold mb-1">{item.judul}</h3>
          <p className="text-sm text-slate-600 line-clamp-2">{item.keterangan}</p>
        </div>

        <div className="bg-gray-100 flex items-center justify-between py-2 p-6 rounded-xl">
          <h4 className="font-semibold">{item.harga}</h4>
          <button className="py-2 px-3 bg-green-800 text-white text-sm font-medium rounded-lg">
            Detail
          </button>
        </div>

      </div>
    </Link>
  )
}

export default Product
