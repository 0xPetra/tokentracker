import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Set loading to true
  balancesLoading: null,
  
  // Get address data from Etherscan
  tokenBalances: ['tokens'],
  
  // Set errors
  balancesErrorMessage: ['error'],
})

export const DataTypes = Types
export default Creators
