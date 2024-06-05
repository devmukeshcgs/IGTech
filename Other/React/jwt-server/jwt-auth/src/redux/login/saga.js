import { all, takeEvery, put, fork, takeLatest, call } from 'redux-saga/effects'
import actions from './actions'

export function* loginRequest() {
    yield takeEvery(actions.LOGIN_REQUEST, function* () { })
}

export function* loginSuccess() {
    yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {
        yield localStorage.setItem('id_token', payload.token)
    })
}

export function* loginError() {
    yield takeEvery(actions.LOGIN_ERROR, function* () { })
}

export function* logout() {
    yield takeEvery(actions.LOGOUT, function* () {
        //clearToken();
        //yield put(push('/'));
    })
}
export function* checkAuthorization() {
    yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
    })
}
export default function* rootSaga(){
    yield all ([
        fork(checkAuthorization),
        fork(loginRequest),
        fork(loginSuccess),
        fork(loginError),
        fork(logout),
    ])
}