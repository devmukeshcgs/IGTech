// import { takeEvery, put, fork, takeLatest, call } from 'redux-saga/effects'
// import { CHECK_AUTHORIZATION, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './actions'
// import { verifyOTP } from './api'

// export function* loginRequest() {
//     yield takeEvery(LOGIN_REQUEST, function* () { })
// }

// export function* loginSuccess() {
//     yield takeEvery(LOGIN_SUCCESS, function* (payload) {
//         yield localStorage.setItem('id_token', payload.token)
//     })
// }

// export function* loginError() {
//     yield takeEvery(LOGIN_ERROR, function* () { })
// }

// export function* logout() {
//     yield takeEvery(LOGOUT, function* () {
//         clearToken();
//         yield put(push('/'));
//     })
// }
// export function* checkAuthorization() {
//     yield takeEvery(CHECK_AUTHORIZATION, function* () {

//     })
// }

