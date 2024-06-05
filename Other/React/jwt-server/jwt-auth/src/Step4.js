import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseSauce } from "./rootSlice";
import { Link } from 'react-router-dom'
import Timeline from './components/Timeline'

export const Step4 = () => {
  // const dispatch = useDispatch();
  const history = useHistory()
  const sauce = useSelector(state => state.sauce)
  // const { register, handleSubmit } = useForm({ defaultValues: { sauce } });

  // const onSubmit = (data) => {
  //   dispatch(chooseSauce(data.sauce));
  //   history.push("./result");
  // };

  return (<div class="container">
    <div class="row">
      <div class="col-md-4">
        <Timeline />
      </div>
      <div class="col-md-8"><form >
        <div class="form-section-head">
          <div>Payment</div>
        </div>
        <div class="cta-container">
          <Link class="btn btn-default btn-lg" to="/other-features">Cash</Link>
          <Link class="btn btn-secondary btn-lg" to="/other-features">Online</Link>
        </div>
      </form></div>
    </div>
  </div>);
};