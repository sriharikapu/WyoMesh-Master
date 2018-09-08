pragma solidity ^0.4.0;
contract Master {

    struct Device {
        string name;
        bool permissioned;
//meta data
    }
    struct IPFS_Hash {
        string ipfs_hash;
    }

    address public auditor;
    mapping(address => Device) devices;
    IPFS_Hash[] ipfs_hashes;
    uint index;

    /// Create a new Master and auditor with $(_numProposals) different ipfs_hashes.
    constructor(uint8 _numHashes) public {
        auditor = msg.sender;
        ipfs_hashes.length = _numHashes;
        index = 0;
    }

    /// Give $(toDevice) the right to add data on this contract
    /// May only be called by $(auditor).
    function addDevice(address toDevice) public {
        if (msg.sender != auditor) return;
        devices[toDevice].permissioned = true;
    }


    /// Give a submit a IPFS_Hash $(to).
    function submit(string newIPFS_Hash) public {
        if(!devices[msg.sender].permissioned || index >= ipfs_hashes.length-1) return;
        ipfs_hashes[index].ipfs_hash = newIPFS_Hash;
        index++;
    }

}
