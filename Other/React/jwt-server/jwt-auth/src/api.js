import axios from 'axios';

const URL = "https://stage-services.truemeds.in/CustomerService/sendOtp/";
const URLProd = "https://services.truemeds.in/CustomerService/sendOtp/";

const headers = {
    'Content-Type': 'application/json',
    'transactionId': "a",
}

export const postNotes = (notes) => {
    return axios.post(URL, null, {
        params: { mobileNo: notes.inputMobileNo },
        headers: headers
    })
        .then((response) => {
            // console.log("NOTES", notes);
            // if (response.status == 200) {
            //     console.log(response.data, response.status);
                return response.data
            // }
        }, (error) => {
            console.log(error, notes);
        });
}

export const verifyOTP = (notes) => {
    return axios.post('https://stage-services.truemeds.in/CustomerService/verifyOtp?mobileNo=' + notes.inputMobileNo + '&otp=' + notes.inputOTP + '&deviceKey=dsfsdfdsfds&isIos=false',
        {
            headers: {
                'Content-Type': 'application/json',
                'transactionId': 'a'
            }
        })
        .then((response) => {
            console.log("NOTES", notes);
            console.log(response, notes);
        }, (error) => {
            console.log(error, notes);
        });
}
