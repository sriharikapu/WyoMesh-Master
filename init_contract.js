// use `node <file>.js`
var Web3 = require('web3');
var web3obj = new Web3(Web3.givenProvider || "http://95663c8e.ngrok.io");

contract = '0xa3c0346a7af69f2f3b79b4c749fd9202098cd097';
gasPrice = 20000000000;


async function getCurrentAccount(){
    const currentAccounts = await web3obj.eth.getAccounts();
//    console.log(`{currentAccounts[0]}`);

    var MasterContract = new web3obj.eth.Contract(JSON.parse('[ { "constant": false, "inputs": [ { "name": "toDevice", "type": "address" } ], "name": "addDevice", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "index_", "type": "uint8" } ], "name": "getHash", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "index_", "type": "uint8" } ], "name": "signAudit", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "newIPFS_Hash", "type": "string" } ], "name": "submitHash", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_maxHashes", "type": "uint8" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [], "name": "auditor", "outputs": [ { "name": "", "type":"address" } ], "payable": false, "stateMutability": "view", "type": "function" }]'),
    contract,//address of contract on the blockchain
    {
    from: currentAccounts[0],
    gasPrice});
}
