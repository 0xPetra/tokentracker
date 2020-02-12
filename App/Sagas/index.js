import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { AccountTypes } from '../Stores/SetUser/Actions'
import { FetchDataActionsTypes } from '../Stores/FetchData/Actions'
import { startup } from './StartupSaga'
import { setUser, logoutUser } from './SetUserSaga'
import { fetchData } from './FetchDataSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(AccountTypes.SET_USER, setUser),

    takeLatest(FetchDataActionsTypes.FETCH_DATA, fetchData),
    
    takeLatest(AccountTypes.LOGOUT_USER, logoutUser),
  ])
}
