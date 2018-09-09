// use `node <file>.js`
var Web3 = require('web3');
var web3obj = new Web3(Web3.givenProvider || "http://95663c8e.ngrok.io");

async function getCurrentAccount(){
    const currentAccounts = await web3obj.eth.getAccounts();
    console.log(`${currentAccounts[0]}`);
    return currentAccounts[0];
}

getCurrentAccount();
