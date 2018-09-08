var Master = artifacts.require("./contracts/Master.sol");

module.exports = function(callback) {
  let master
  Master.new(10).then(instance => {master = instance;console.log(master.address)}  )
};
