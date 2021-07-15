/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
// require('dotenv').config({ path: __dirname + '/../.env' })
import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

// Polkadot
import { ApiPromise, WsProvider } from '@polkadot/api'
const ACCOUNT_ID = Env.get('KSM_ADDRESS')
const KSM_ENDPOINT = 'wss://kusama-rpc.polkadot.io/'
// const DOT_ENDPOINT = "wss://rpc.kusm.io";
const wsProvider = new WsProvider(KSM_ENDPOINT)

Route.get('/', async () => {
  console.log(ACCOUNT_ID)
  console.log('Afterwards')
  const api = await ApiPromise.create({ provider: wsProvider })
  const now = await api.query.timestamp.now()
  const { nonce, data: balance } = await api.query.system.account(ACCOUNT_ID)
  // res.send(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);
  return {
    timestamp: now,
    balance: balance,
    message: `${now}: balance of ${balance.free} and a nonce of ${nonce}`,
  }
})
