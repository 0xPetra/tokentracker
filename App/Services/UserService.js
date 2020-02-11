import axios from 'axios'

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
  }
  const response = await userApiClient.get(etherscanAPI, { params })
  if (response.status === 200 && response.data.message === 'OK') {
    let tokens = [];
    let hashmap = {};
    response.data.result.map((token) => {
      if(!hashmap[token.contractAddress]) {
        hashmap[token.contractAddress] = true;
        tokens.push({
          contractAddress: token.contractAddress,
          tokenName: token.tokenName,
          tokenSymbol: token.tokenSymbol,
          tokenDecimal: token.tokenDecimal,
        });
    }
  })
    return tokens;
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
  const apikey = process.env['COINAPI_KEY'];
  const params = {
    apikey
  }
  const response = await userApiClient.get(baseURL, { params })
  if (response.status === 200) {
    return !!response.data.rate ? response.data.rate : 0
  }
  else {
    return response
  }
}

export const userTokenService = {
  getTokens,
  getTokensBalances,
  getTokenPrice
}
