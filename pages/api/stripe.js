import connectDB from "@/db";
import Stripe from "stripe";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Request body:", req.body);  // Log request body for debugging
    await connectDB();

    const { id, email } = req.body;

    if (!id || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hotel = await Hotel.findById(id);
    if (hotel) {
      const amount = hotel.price * 100;  // Convert to cents

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'inr',
                product_data: {
                  name: hotel.name,
                },
                unit_amount: amount,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${process.env.BASE_URL}/success`,
          cancel_url: `${process.env.BASE_URL}/cancel`,
          customer_email: email,
          metadata: {
            integration_check: 'accept_a_payment',
            hotel_id: hotel._id.toString(),
            receipt_id: shortid.generate(),
          },
        });

        return res.status(201).json({
          id: session.id,
          amount: session.amount_total,
          currency: session.currency,
        });
      } catch (err) {
        console.error("Stripe error:", err);  // Log Stripe error for debugging
        res.status(400).json({ error: err.message });
      }
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
