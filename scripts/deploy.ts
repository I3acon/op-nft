import { ethers } from 'hardhat'
import hre from 'hardhat'

async function main() {
  // const BBQ = await ethers.getContractFactory('BBQ')
  // const bbq = await BBQ.deploy()
  // await bbq.deployed()

  // console.log('BBQ deployed to:', bbq.address)

  await hre.run('verify:verify', {
    address: '0x40d3c2dE98E74D323576388ee6DcD28D89b64Bc5',
    constructorArguments: [],
  })
}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
