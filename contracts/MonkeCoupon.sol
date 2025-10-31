// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MonkeCoupon is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    mapping(address => bool) public hasClaimed;

    constructor() ERC721("MonkeCoupon", "MNKC") {}

    function mintCoupon(string memory tokenURI) public {
        require(!hasClaimed[msg.sender], "You already claimed your Monke coupon!");
        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        hasClaimed[msg.sender] = true;
    }
}
