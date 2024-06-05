import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseBase } from './rootSlice'
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import Timeline from './components/Timeline'

export const Step1 = () => {
  const Step1Schema = yup.object().shape({
    search: yup.string().required(),
    picture: yup
      .mixed()
      .required("You need to provide a file")
      .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size <= 200000;
      })
      .test("type", "We only support jpeg", (value) => {
        return value && value[0].type === "image/jpeg";
      }),
  });
  const dispatch = useDispatch()
  const history = useHistory()
  const base = useSelector(state => state.base)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Step1Schema)
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    // alert(JSON.stringify(res))
    // dispatch(chooseBase(data.base))
    history.push("./step2")
  }

  return (<div class="page-wrapper ">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Timeline />
        </div>
        <div class="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-section-head">
              <div>Upload Medicine OR Search</div>
            </div>
            {/* <div class="form-group">
              <label class="sr-only" for="searchmedicine">Amount (in dollars)</label>
              <div class="input-group">
                <input type="text" class="form-control" id="searchmedicine" name="searchmedicine" placeholder="Search Medicine" />
                <div class="input-group-addon">Search</div>
              </div>
            </div> */}
            <hr></hr>
            <hr></hr>
            <div>
              {/* <div class="upload-btn-wrapper">
              <button class="btn">Upload a file</button>
              <input type="file" name="picture" />
              {errors.picture && <p>{errors.picture.message}</p>}
            </div> */}

              {/* <label htmlFor="base">Upload</label> */}
              {/* <input ref={register} class="form-control" type="file" name="picture" />
            {errors.picture && <p>{errors.picture.message}</p>} */}
              <input ref={register} type="file" name="picture" id="picture" />

              {errors.picture && <p className="error">{errors.picture.message}</p>}
              <hr></hr>
              <hr></hr>
              <label htmlFor="base">Search</label>

              <input class="form-control" ref={register} type="text" name="search" id="search" />
              {errors.search && <p className="error">{errors.search.message}</p>}

              {/* <select id="base" name="base" ref={register}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select> */}
            </div>

            <div class="cta-container">
              <button class="btn btn-default btn-lg">Buy Medicines</button>
              {/* <Link class="btn blue" to="/other-features">Explore other features</Link> */}
            </div>
          </form></div>
      </div>
    </div>

  </div>

  )
}