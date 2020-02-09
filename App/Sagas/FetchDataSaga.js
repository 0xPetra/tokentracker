import { put, call } from 'redux-saga/effects'
import { userTokenService } from '../Services/UserService'
import DataActions from '../Stores/Data/Actions'

export function* fetchData({address}) {

  // Set balancesLoading to true
  yield put(DataActions.balancesLoading())
  
  // Fetch balance token information from an API
  let tokens = yield call(userTokenService.getTokens, address)
  let error = '';
  
  // Fetching the token balance of the current address
  if (tokens && typeof tokens === 'object') {
    yield* tokens.map(async (token, idx) => {
      try{
          const balanceTokens = await userTokenService.getTokensBalances(address, token.contractAddress);     
          // We divide by token decimals (usually 18)
          const balance = token.tokenDecimal > 0 ? balanceTokens/token.tokenDecimal : balanceTokens/18
          tokens[idx]['balance'] = balance;
      } catch (error) {
        error = error.concat(error)
      }
  })

  // Fetching the price of each token 
  // yield* tokens.map(async (token, idx) => {
  //   try {
  //     const price = await userTokenService.getTokenPrice(token.tokenSymbol);
  //     tokens[idx]['price'] = price;
  //   } catch (error) {
  //     error = error.concat(error)
  //   }
  // })    
  } else {
    error = error.concat(tokens)
  }

  if (!!error.length) {
    console.log('errorrrrrrrr', error, !!error.length);
    yield put(DataActions.balancesErrorMessage(error))
  } else {
    console.log('set tokenssss');
    yield put(DataActions.tokenBalances(tokens))
  }


}