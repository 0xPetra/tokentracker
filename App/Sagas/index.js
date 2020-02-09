import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from '../Stores/Example/Actions'
import { StartupTypes } from '../Stores/Startup/Actions'
import { AccountTypes } from '../Stores/SetUser/Actions'
// import { ExampleTypes } from '../Stores/Example/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { setUser } from './SetUserSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),

    takeLatest(AccountTypes.SET_USER, setUser),
  ])
}
