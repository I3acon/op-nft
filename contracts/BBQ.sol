// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BBQ is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private collectionIds;

    constructor() ERC721("BBQ in the winter", "BBQ") {
    }
    function mint(string memory tokenURI) public {
        require(collectionIds.current() < 1, "Collection limit reached");
        collectionIds.increment();
        _mint(msg.sender, collectionIds.current());
        _setTokenURI(collectionIds.current(), tokenURI);
    }

    
}

