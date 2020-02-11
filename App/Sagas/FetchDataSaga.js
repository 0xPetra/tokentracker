import { put, call } from 'redux-saga/effects'
import { userTokenService } from '../Services/UserService'
import DataActions from '../Stores/Data/Actions'

export function* fetchData({address}) {

  // Set balancesLoading to true
  yield put(DataActions.balancesLoading())
  
  // Fetch balance token information from an API
  let tokens = yield call(userTokenService.getTokens, address)
  let errorgetTokensBalances = '';
  let errorbalancesErrorMessage = '';
  // Fetching the token balance of the current address
  if (tokens && typeof tokens === 'object') {
    yield* tokens.map(async (token, idx) => {
      try{
          const balanceTokens = await userTokenService.getTokensBalances(address, token.contractAddress);     
          // We divide by token decimals (usually 18 decimals which is the default)
          const balance = token.tokenDecimal > 0 ? balanceTokens/Math.pow(10, token.tokenDecimal) : balanceTokens/Math.pow(10, 18)
          tokens[idx]['balance'] = balance;
        } catch (error) {
          tokens[idx]['balance'] = 0;
          errorgetTokensBalances = error;
      }
  })

  // Fetching the price of each token 
  yield* tokens.map(async (token, idx) => {
    try {
      const price = await userTokenService.getTokenPrice(token.tokenSymbol);
      tokens[idx]['price'] = price;
    } catch (error) {
      tokens[idx]['price'] = 0;
      errorbalancesErrorMessage = error;
    }
  })
  }

  if (!!errorgetTokensBalances || !!errorbalancesErrorMessage) {
    yield put(DataActions.balancesErrorMessage({ error: `${errorgetTokensBalances} \n ${errorbalancesErrorMessage}`}))
  }
    yield put(DataActions.tokenBalances(tokens))
}