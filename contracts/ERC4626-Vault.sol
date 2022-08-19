// SPDX-License-Identifier: MIT
pragma solidity = 0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";

contract ERC4626Vault is ERC4626 {

    IERC20Metadata private token = IERC20Metadata(0x337dfC6929bb5089EA5e805C2f8A95F371eF24e0);
    
    constructor() ERC4626(token) ERC20("ThiVault", "TV$"){
    }
}