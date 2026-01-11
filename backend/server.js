// require("dotenv").config()
// const express = require("express")
// const cors = require("cors")
// const midtransClient = require("midtrans-client")
// console.log("MIDTRANS KEY:", process.env.MIDTRANS_SERVER_KEY)


// const app = express()
// app.use(cors())
// app.use(express.json())

// const snap = new midtransClient.Snap({
//   isProduction: false,
//   serverKey: process.env.MIDTRANS_SERVER_KEY,
// })

// app.post("/create-transaction", async (req, res) => {
//   try {
//     const { id, name, price, qty } = req.body

//     const parameter = {
//       transaction_details: {
//         order_id: "ORDER-" + Date.now(),
//         gross_amount: price * qty
//       },
//       item_details: [
//         {
//           id,
//           price,
//           quantity: qty,
//           name
//         }
//       ]
//     }

//     const transaction = await snap.createTransaction(parameter)

//     res.json({ token: transaction.token })
//   } catch (error) {
//     console.error("MIDTRANS ERROR:", error)
//     res.status(500).json({ error: error.message })
//   }
// })

// app.listen(5000, () => {
//   console.log("Backend running on http://localhost:5000")
// })
