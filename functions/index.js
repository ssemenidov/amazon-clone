const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51J5814KHWr3E9rCy7osCC2feFtWWk8Uz2OneMHlEEbWkwKgj5apumGVSykO1A1U3y9Au4JHAdMUPfxDfytp7zubG00QDM9xnJD"
);
// -App config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/qazi", (req, res) => res.status(200).send("hello qazi"));
// - Listen commands
exports.api= functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
