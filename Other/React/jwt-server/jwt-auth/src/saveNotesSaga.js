import { takeLatest, call, put } from 'redux-saga/effects'
import { SAVE_NOTES, SAVE_NOTES_DONE } from './actions'
import { postNotes } from './api'

export function* saveNotesWatcher() {
    yield takeLatest(SAVE_NOTES, saveNotesFlow)
}

function* saveNotesFlow(action) {
    console.log("action.payload", action.payload);
    // yield call(postNotes, action.payload)
    const json = yield call(postNotes, action.payload)
    yield put({ type: "SAVE_NOTES_DONE", json: json })
}