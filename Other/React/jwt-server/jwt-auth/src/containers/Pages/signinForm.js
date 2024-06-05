// import React from 'react';
// import { useForm } from 'react-hook-form'
// import { useHistory } from 'react-router-dom'
// import { yupResolver } from '@hookform/resolvers';
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, saveNotes, loadNotes, verifyOTP } from "../../actions";
// import { useStore } from 'react-redux'
// import * as yup from "yup";

// export const SigninForm = (props, state) => {
//     console.log("PROPS FORM", props);
//     console.log("STATE FORM", state);
//     const LoginSchema = yup.object().shape({
//         // mobile: yup
//         //   .number()
//         //   .typeError('It must be a number')
//         //   .required("Please provide mobile number."),
//         inputMobileNo: yup
//             .number()
//             .typeError('It must be a number')
//             .required("Please provide mobile number."),
//         // inputOTP: yup
//         //   .number()
//         //   .typeError('It must be a number')
//         //   .required("OTP required"),
//     })

//     const dispatch = useDispatch()
//     const history = useHistory()
//     const base = useSelector(state => state.base)

//     const { register, formState, unregister, watch, trigger, handleSubmit, errors } = useForm({
//         resolver: yupResolver(LoginSchema)
//     });

//     // const inputMobileNo = watch("inputMobileNo");
//     // const mobile = watch("mobile");

//     const onSubmit = (data) => {
//         console.log(JSON.stringify(data))
//         formState.isValid ? console.log("YES") : console.log("NO");
//         dispatch(saveNotes(data));
//         // if (data.inputMobileNo) {
//         //   alert(data)
//         //   alert(data.inputMobileNo)
//         //   dispatch(saveNotes(data));
//         // }
//         // if (data.inputMobileNo && data.inputOTP) {
//         //   alert(data)
//         //   alert(data.inputMobileNo + "=" + data.inputOTP)
//         //   dispatch(verifyOTP(data));
//         // }
//         // Auth.getAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/login" }} />)

//         // history.push("./step0")
//     }
//     const onSubmit2 = (data) => {
//         trigger("mobile");
//     }
//     const onSubmit3 = (data) => {
//         console.log(formState.isValid);
//         trigger("inputMobileNo");
//     }
//     return (<div className="page-wrapper">
//         <div className="container">
//             <div className="loginSection">
//                 <div className="row">
//                     <div className="col-md-4"></div>
//                     <div className="col-md-4">
//                         <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
//                             {/*
//               <div className="form-group">
//                 <label className="sr-only" htmlFor="mobile">Mobile No.</label>
//                 <div className="input-group">
//                   <input ref={register} type="text" className="form-control input-lg" name="mobile" id="mobile" placeholder="Mobile No." />
//                   <div className="input-group-addon" onClick={(onSubmit2)}>
//                     GET OTP
//                   </div>
//                 </div>
//                 {errors.mobile && <p className="error">{errors.mobile.message}</p>}
//               </div>*/}

//                             {/* */}
//                             <div className="form-group">
//                                 <input ref={register({ maxLength: 10 })} type="text" name="inputMobileNo" id="inputMobileNo" className="form-control  input-lg" placeholder="Mobile Number" />
//                                 {errors.inputMobileNo && <p className="error">{errors.inputMobileNo.message}</p>}
//                             </div>

//                             {/* OTP */}
//                             {/* {mobile && (*/}
//                             {formState.isValid ?
//                                 <div className="form-group">
//                                     {/* <input ref={register} type="text" name="inputOTP" id="inputOTP" className="form-control  input-lg" placeholder="OTP" />
//                 {errors.inputOTP && <p className="error">{errors.inputOTP.message}</p>} */}
//                                 </div>
//                                 : <p>Nilesh</p>}


//                             {/* )} */}

//                             {/* <button className="btn btn-lg btn-primary" type="submit">Generate OTP</button> */}

//                             {/* <button onClick={(onSubmit3)}>TEST</button> */}
//                             <button className="btn btn-lg btn-primary" type="submit">Login</button>
//                             <br />
//                             {formState.isValid ? <p>MUKESH</p> : <p>Nilesh</p>}
//                             <br />
//                         </form>
//                     </div>
//                     <div className="col-md-4"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }
