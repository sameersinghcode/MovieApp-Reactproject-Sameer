const express = require('express');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
 key_id: 'rzp_test_q5uD8SSpXDHR5f',
 key_secret: 'XQyxA0Y88pFIsosvTaW2KSGT',
});

app.post('/api/razorpay', async (req, res) => {
 const payment_capture = 1;
 const amount = 50000; // Amount in paise
 const currency = 'INR';
 const options = {
  amount: amount.toString(),
  currency,
  receipt: shortid.generate(),
  payment_capture,
 };

 try {
  const response = await razorpay.orders.create(options);
  res.status(200).json({
    id: response.id,
    currency: response.currency,
    amount: response.amount,
  });
 } catch (err) {
  console.log(err);
  res.status(400).json(err);
 }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
