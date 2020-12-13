import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCheese } from "./rootSlice";
import Timeline from './components/Timeline'

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const cheese = useSelector(state => state.cheese)
  const { register, handleSubmit } = useForm({ defaultValues: { cheese } });

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push("./step4");
  };

  return (<div class="container">
    <div class="row">
      <div class="col-md-4">
        <Timeline />
      </div>
      <div class="col-md-8"><form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-section-head">
          <div>Address</div>
        </div>
        <div>
          <label class="checkbox-inline" htmlFor="home">
            <input type="checkbox" ref={register} name="home" /> Home
        </label>
          <label class="checkbox-inline" htmlFor="office">
            <input type="checkbox" ref={register} name="office" /> Office
        </label>
          <label class="checkbox-inline" htmlFor="other">
            <input type="checkbox" ref={register} name="other" /> Other
        </label>
          <hr></hr>
          <label htmlFor="line1">Line 1:</label>
          <input class="form-control" ref={register} type="text" name="line1" />
          <label htmlFor="line2">Line 2:</label>
          <input class="form-control" ref={register} type="text" name="line2" />
        </div>
        <div class="cta-container">
          <button class="btn btn-default btn-lg">Next</button>
        </div>
      </form></div>
    </div>
  </div>);
};