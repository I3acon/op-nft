import { HardhatUserConfig } from 'hardhat/config'
import 'dotenv/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-etherscan'

// Template
const {
  ROPSTEN_RPC,
  PRIVATE_KEY,
  ETHERSCAN_API,
  RINKEBY_RPC,
  POLYGON_RPC,
  MUMBAI_RPC,
  POLYSCAN_API,
  OP_RPC,
  OP_API,
  OP_KEY,
} = process.env

const config: HardhatUserConfig = {
  networks: {
    ropsten: {
      url: ROPSTEN_RPC,
      accounts: [PRIVATE_KEY as string],
    },
    rinkeby: {
      url: RINKEBY_RPC,
      accounts: [PRIVATE_KEY as string],
    },
    polygon: {
      url: POLYGON_RPC,
      accounts: [PRIVATE_KEY as string],
    },
    mumbai: {
      url: MUMBAI_RPC,
      accounts: [PRIVATE_KEY as string],
    },
    OP: {
      url: OP_RPC,
      accounts: [OP_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      //ethereum
      mainnet: ETHERSCAN_API as string,
      ropsten: ETHERSCAN_API as string,
      rinkeby: ETHERSCAN_API as string,
      goerli: ETHERSCAN_API as string,
      kovan: ETHERSCAN_API as string,
      //polygon
      polygon: POLYSCAN_API as string,
      polygonMumbai: POLYSCAN_API as string,
      //optimism
      optimisticEthereum: OP_API as string,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
}

export default config
