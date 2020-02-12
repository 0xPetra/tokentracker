import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the user refreshs the app
  fetchData: ['address'],
})

export const FetchDataActionsTypes = Types
export default Creators
