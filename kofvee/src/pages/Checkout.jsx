import { useLocation } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Checkout = () => {
  const { state } = useLocation()
  const [serveType, setServeType] = useState("dine-in")

  const product = state?.product

  if (!product) {
    return (
      <p className="text-center mt-20">
        Data checkout kosong. Silakan pilih produk terlebih dahulu.
      </p>
    )
  }

  const handlePay = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-transaction",
        {
          id: "PRODUCT-001",
          name: product.judul,
          price: Number(product.harga),
          qty: 1,
          serveType: serveType,
          temperature: product.temperature // ✅ tampilkan & kirim saja
        }
      )

      window.snap.pay(response.data.token)
    } catch (error) {
      console.error(
        "ERROR PAYMENT:",
        error.response?.data || error.message
      )
    }
  }

  return (
    <div className="max-w-3xl mx-auto pt-32 px-4 mb-20">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="border rounded-xl p-6 bg-white shadow-sm">
        {/* PRODUK */}
        <div className="flex gap-4 items-center">
          <img
            src={product.gambar}
            alt={product.judul}
            className="w-24 rounded-lg"
          />

          <div className="flex-1">
            <h2 className="font-semibold">{product.judul}</h2>
            <p className="text-gray-600">
              Rp {product.harga.toLocaleString()}
            </p>

            {/* SUHU (READ ONLY) */}
            {product.temperature && (
              <p className="text-sm text-gray-500 mt-1">
                Suhu: {product.temperature === "hot" ? "🔥 Panas" : "❄️ Dingin"}
              </p>
            )}
          </div>
        </div>

        {/* PENYAJIAN */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Penyajian</h3>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setServeType("dine-in")}
              className={`border rounded-xl p-4 text-center transition
                ${serveType === "dine-in"
                  ? "ring-2 ring-green-800 bg-green-50"
                  : "border-gray-300"}
              `}
            >
              
              <p className="font-medium">Di Sini</p>
            </button>

            <button
              onClick={() => setServeType("takeaway")}
              className={`border rounded-xl p-4 text-center transition
                ${serveType === "takeaway"
                  ? "ring-2 ring-green-800 bg-green-50"
                  : "border-gray-300"}
              `}
            >
              
              <p className="font-medium">Dibungkus</p>
            </button>
          </div>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between mt-8 font-semibold">
          <span>Total</span>
          <span>Rp {product.harga.toLocaleString()}</span>
        </div>

        <button
          onClick={handlePay}
          className="mt-6 w-full bg-green-800 text-white py-3 rounded-lg font-semibold"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  )
}

export default Checkout
