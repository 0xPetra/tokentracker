/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from 'reduxsauce'
import { AccountTypes } from './Actions'

export const setUser = (state, { address }) => ({
  ...state,
  address,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer('', {
  [AccountTypes.SET_USER]: setUser,
})
