import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCrust } from "./rootSlice";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'; // for everything
import Timeline from './components/Timeline'

export const Step2 = () => {

  const Step2Schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    gender: yup.string().required(),
    email: yup.mixed().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Step2Schema)
  })
  const dispatch = useDispatch();
  const history = useHistory()
  const crust = useSelector(state => state.crust)
  // const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    //dispatch(chooseCrust(data.crust));
    history.push("./step3");
    console.log(JSON.stringify(data));
  };

  return (<div class="container">
    <div class="row">
      <div class="col-md-4">
        <Timeline />
      </div>
      <div class="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-section-head">
            <div>Patiant Details</div>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input class="form-control" ref={register} id="name" name="name" type="text" />
            {errors.name && <p>{errors.name.message}</p>}

            <label htmlFor="age">Age:</label>
            <input class="form-control" ref={register} type="text" name="age" id="age" />
            {errors.age && <p>{errors.age.message}</p>}

            <label htmlFor="gender">Gender:</label>
            <input class="form-control" ref={register} type="text" name="gender" id="gender" />
            {errors.gender && <p>{errors.gender.message}</p>}

            <label htmlFor="email">Email:</label>
            <input class="form-control" ref={register} type="text" name="email" id="email" />
            {errors.email && <p>{errors.email.message}</p>}

            {/* <select id="crust" name="crust" ref={register}>
          <option value="classic_thin">Classic Thin</option>
          <option value="deep_pan">Deep Pan</option>
          <option value="filled_crust">Filled Crust</option>
        </select> */}
          </div>
          <div class="cta-container">
            <button class="btn btn-default btn-lg">Submit</button>
          </div>
        </form></div>
    </div>
  </div>);
};