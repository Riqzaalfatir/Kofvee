  import React, { useEffect, useState } from "react"
  import { useParams, useNavigate } from "react-router-dom"
  import { cards } from "../mocks/data"

  const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [temperature, setTemperature] = useState("hot")

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const product = cards.find(item => item.id === Number(id))

    if (!product) {
      return <p className="text-center mt-20">Produk Tidak Ditemukan</p>
    }

    const handleCheckout = () => {
      navigate("/checkout", {
        state: {
          product: {
            id: product.id,
            judul: product.judul,
            harga: product.harga,
            gambar: product.gambar,
            temperature: temperature
          }
        }
      })
    }

    return (
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-20 grid md:grid-cols-2 gap-8">
      <img
        src={product.gambar}
        alt={product.judul}
        className="w-full rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.judul}</h1>

        <p className="text-brown-600 text-xl my-4">
          Rp {product.harga.toLocaleString()}
        </p>

        <p className="text-gray-600 mb-8">{product.keteranganco}</p>

        {/* PILIH SUHU */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Pilih Suhu</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setTemperature("hot")}
              className={`flex-1 py-3 rounded-xl border transition
                ${temperature === "hot"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-gray-300"}
              `}
            >
              Panas
            </button>

            <button
              onClick={() => setTemperature("ice")}
              className={`flex-1 py-3 rounded-xl border transition
                ${temperature === "ice"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white border-gray-300"}
              `}
            >
              Dingin
            </button>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="py-3 w-full bg-black text-white rounded-lg font-semibold"
        >
          Checkout
        </button>
      </div>
    </div>
    )
  }

  export default Detail
