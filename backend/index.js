import express from "express"
import cors from "cors"
import midtransClient from "midtrans-client"
import dotenv from "dotenv"

dotenv.config()

console.log("MIDTRANS KEY:", process.env.MIDTRANS_SERVER_KEY)

const app = express()
app.use(cors())
app.use(express.json())

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY
})

app.post("/create-transaction", async (req, res) => {
  try {
    console.log("PAYLOAD FE:", req.body)

    const { id, name, price, qty } = req.body

    if (!id || !name || price == null || qty == null) {
      return res.status(400).json({ error: "Invalid payload" })
    }

    const parameter = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`,
        gross_amount: price * qty
      },
      item_details: [
        {
          id,
          price,
          quantity: qty,
          name
        }
      ]
    }

    const transaction = await snap.createTransaction(parameter)
    res.json({ token: transaction.token })
  } catch (error) {
    console.error("MIDTRANS ERROR:", error.ApiResponse || error)
    res.status(500).json({
      error: "Midtrans error",
      detail: error.ApiResponse
    })
  }
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})
