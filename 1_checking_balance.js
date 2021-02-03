const Web3 = require('web3')
require('dotenv').config()

// get your infura_api_key from .env
const infura_api_key = process.env.INFURA_API_KEY
// console.log(infura_api_key)
// instantiate a web3 connection a web3 connection based on the infura api key
// note that we are connecting to the main net here
const web3 = new Web3(`https://mainnet.infura.io/v3/${infura_api_key}`)

// let's check the account of this balance
const address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"

// check the account balance like this
web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei,'ether');
    console.log(balance)
})