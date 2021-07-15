// Core
require("dotenv").config();

// Express
var express = require("express");
var router = express.Router();

// Polkadot
// import { ApiPromise, WsProvider } from "@polkadot/api";
// const ACCOUNT_ID = process.env.KSM_ADDRESS;
// const KSM_ENDPOINT = "wss://kusama-rpc.polkadot.io/";
// const DOT_ENDPOINT = "wss://rpc.kusm.io";
// const wsProvider = new WsProvider(KSM_ENDPOINT);
// const api = await ApiPromise.create({ provider: wsProvider });

/* GET users listing. */
router.get("/", function (req, res, next) {
  // const now = await api.query.timestamp.now();
  // const { nonce, data: balance } = await api.query.system.account(ACCOUNT_ID);
  // res.send(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);
  res.send("Tetsing");
});

module.exports = router;
