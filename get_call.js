var Master = artifacts.require("./contracts/Master.sol");

module.exports = function(callback) {
var account_one = "0x1234"; // an address

var meta;
MetaCoin.deployed().then(function(instance) {
  meta = instance;
  return meta.getBalance.call(account_one, {from: account_one});
}).then(function(balance) {
  // If this callback is called, the call was successfully executed.
  // Note that this returns immediately without any waiting.
  // Let's print the return value.
  console.log(balance.toNumber());
}).catch(function(e) {
  // There was an error! Handle it.
})
};
