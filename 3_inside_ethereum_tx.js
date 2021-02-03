const Tx = require('ethereumjs-tx').Transaction
require('dotenv').config()
const Web3 = require('web3')
const web3 = new Web3(`https://ropsten.infura.io/v3/${process.env.infura_api_key}`)

const privateKey = Buffer.from(process.env.PRIVATE_KEY,'hex')
console.log(privateKey)

account1 = '0xC0714215bEc2b847e138e757E63a12FbcfBB9DDA'
account2 = '0x62E655669042317e9F13F5d468A6EC7e1A87E92D'


//deploy contract
web3.eth.getTransactionCount (account1,  (err, txCount) => {
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
      }
      
    const tx = new Tx(txObject,{'chain':'ropsten'})
    tx.sign(privateKey)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
    web3.eth.sendSignedTransaction(raw
    , (err, txHash) => {
        console.log('txHash: ', txHash)
    })
})