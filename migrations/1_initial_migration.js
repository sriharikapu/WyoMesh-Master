var Migrations = artifacts.require("Migrations.sol");
var Master = artifacts.require("Master.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Master);
};
