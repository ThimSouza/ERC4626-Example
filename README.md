# ERC4626 Example

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![example branch parameter](https://github.com/cloudwalk/brlc-token/actions/workflows/build.yml/badge.svg?branch=main)
![example branch parameter](https://github.com/cloudwalk/brlc-token/actions/workflows/test.yml/badge.svg?branch=main)

A smart contract that implements ERC4626 standard.

It receives the token I [deployed](https://github.com/ThimSouza/ERC20-Upgradeable-example), and returns the vault's shares

## Build and test

``` sh
npm install
npx hardhat compile
npx hardhat test
```

## Networks and deployments
This contract is deployed into Kovan testnet, wanna see? [Click Here](https://kovan.etherscan.io/address/0x439991c1f7bc2ae7b6d70e3330708346deae5d55).
