/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from 'reduxsauce'
import { DataTypes } from './Actions'

const INITIAL_STATE = {
  tokenBalances: {}, 
  balancesLoading: false,
  balancesErrorMessage: null
}

export const balancesLoading = (state) => ({
  ...state, 
  balancesLoading: true,
  balancesErrorMessage: null
})

export const tokenBalances = (state, { tokens }) => ({
  ...state,
  tokenBalances: tokens, 
  balancesLoading: false,
  balancesErrorMessage: null
})

export const balancesErrorMessage = (state, { error }) => ({
  ...state, 
  balancesLoading: false,
  balancesErrorMessage: error
})


export const reducer = createReducer(INITIAL_STATE, {
  [DataTypes.BALANCES_LOADING]: balancesLoading,
  [DataTypes.TOKEN_BALANCES]: tokenBalances,
  [DataTypes.BALANCES_ERROR_MESSAGE]: balancesErrorMessage,
})
