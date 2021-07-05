const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const keys = require('./keys.js');
const stripe = require('stripe')(keys.SEKRET_KEY || '');
// -App config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  await res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
