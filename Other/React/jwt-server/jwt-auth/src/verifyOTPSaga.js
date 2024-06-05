import { takeLatest, call } from 'redux-saga/effects'
import { VERIFY_OTP } from './actions'
import { verifyOTP } from './api'

export function* verifyOTPWatcher() {
    yield takeLatest(VERIFY_OTP, verifyOTPFlow)
}

function* verifyOTPFlow(action) {
    yield call(verifyOTP, action.payload)
}