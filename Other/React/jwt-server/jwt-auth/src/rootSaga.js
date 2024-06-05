import { fork } from 'redux-saga/effects'
// import { loadNotesWatcher } from './loadNotesSaga'
import { saveNotesWatcher } from './saveNotesSaga'
import { verifyOTPWatcher } from './verifyOTPSaga'

export function* rootSaga() {
    // yield fork(loadNotesWatcher)
    yield fork(saveNotesWatcher)
    yield fork(verifyOTPWatcher)
}