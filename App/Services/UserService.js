import axios from 'axios'
// import { Config } from 'App/Config

// TODO: Move to constants
const etherscanAPI = 'https://api.etherscan.io/api'

const userApiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

// 1. Get all ERC-20 tokens for the submitted address
// https://api.etherscan.io/api?module=account&action=tokentx&address=<USER-ADDRESS>&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken
async function getTokens(address) {
  const params = {
    module: 'account',
    action: 'tokentx',
    address,
    startblock: 0,
    endblock: 999999999,
    sort: 'asc',
    // TODO: Move to Env
    // apikey: 'PM1TP3JRM7VDY5IRVKSCN2N71424CEV4WN'
  }
  const response = await userApiClient.get(etherscanAPI, { params })
  if (response.status === 200 && response.data.message === 'OK') {
    return response.data.result
  }
  else {
    return response.data.message
  }
}

// 2. For each ERC-20 token, query the contract and get the user's balance
// https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=<ERC20-CONTRACT-ADDRESS>&address=<USER-ADDRESS>&tag=latest
// The value obtained will need to be converted depending token's decimals, just for the sake of this being a challenge: **divide this value by 18**
async function getTokensBalances(address, contractaddress) {
  const params = {
    module: 'account',
    action: 'tokenbalance',
    contractaddress,
    address,
    tag: 'latest'
  }
  const response = await userApiClient.get(etherscanAPI, { params })
  if (response.status === 200 && response.data.message === 'OK') {
    return response.data.result
  }
  else {
    return response.data.message
  }
}

// 3. Get the price of each token and multiply by user's balance
// https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=<API-KEY>
async function getTokenPrice(tokenSymbol) {
  const baseURL = `https://rest.coinapi.io/v1/exchangerate/${tokenSymbol}/USD`
  const params = {
    // Xivis
    // apikey: 'E0A376F2-B9B6-4B2C-9848-76C3D918BE82'//process.env.COINAPI_KEY,
    apikey: '32B27A5B-3202-4481-8720-EE9D7F2880D6'//process.env.COINAPI_KEY,

    // FPetra
    // apikey: 'EA419A45-365C-44F3-8DB8-564822EF773D'//process.env.COINAPI_KEY,
  }
  const response = await userApiClient.get(baseURL, { params })
  console.log('response', response);
  if (response.status === 200) {
    return response.data.rate
  }
  else {
    return 'error'
  }
}

export const userTokenService = {
  getTokens,
  getTokensBalances,
  getTokenPrice
}
