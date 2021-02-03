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
    const data = '0x60606040526040805190810160405280600a81526020017f4441707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f92919061014c565b506040805190810160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061014c565b506040805190810160405280600f81526020017f4441707020546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e792919061014c565b5034156100f357600080fd5b6000620f4240905080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600381905550506101f1565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018d57805160ff19168380011785556101bb565b828001600101855582156101bb579182015b828111156101ba57825182559160200191906001019061019f565b5b5090506101c891906101cc565b5090565b6101ee91905b808211156101ea5760008160009055506001016101d2565b5090565b90565b610b5a806102006000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009e578063095ea7b31461012c57806318160ddd1461018657806323b872dd146101af5780635a3b7e421461022857806370a08231146102b657806395d89b4114610303578063a9059cbb14610391578063dd62ed3e146103eb575b600080fd5b34156100a957600080fd5b6100b1610457565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f15780820151818401526020810190506100d6565b50505050905090810190601f16801561011e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561013757600080fd5b61016c600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104f5565b604051808215151515815260200191505060405180910390f35b341561019157600080fd5b6101996105e7565b6040518082815260200191505060405180910390f35b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105ed565b604051808215151515815260200191505060405180910390f35b341561023357600080fd5b61023b61085c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027b578082015181840152602081019050610260565b50505050905090810190601f1680156102a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102c157600080fd5b6102ed600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108fa565b6040518082815260200191505060405180910390f35b341561030e57600080fd5b610316610912565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035657808201518184015260208101905061033b565b50505050905090810190601f1680156103835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561039c57600080fd5b6103d1600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109b0565b604051808215151515815260200191505060405180910390f35b34156103f657600080fd5b610441600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b09565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ed5780601f106104c2576101008083540402835291602001916104ed565b820191906000526020600020905b8154815290600101906020018083116104d057829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561063d57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106c857600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108f25780601f106108c7576101008083540402835291602001916108f2565b820191906000526020600020905b8154815290600101906020018083116108d557829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a85780601f1061097d576101008083540402835291602001916109a8565b820191906000526020600020905b81548152906001019060200180831161098b57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a0057600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60056020528160005260406000206020528060005260406000206000915091505054815600a165627a7a72305820135c3bbd3eb66231d59211ecf9d7a1b2a069d71264fc8d755a198666db2430840029'
   
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(1000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
        data: data,
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


