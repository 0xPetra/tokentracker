import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { AccountTypes } from '../Stores/SetUser/Actions'
import { startup } from './StartupSaga'
import { setUser, logoutUser } from './SetUserSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(AccountTypes.SET_USER, setUser),

    takeLatest(AccountTypes.LOGOUT_USER, logoutUser),
  ])
}
