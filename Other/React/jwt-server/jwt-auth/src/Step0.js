import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { chooseBase } from './rootSlice'
import { Link } from 'react-router-dom'
import Timeline from './components/Timeline'

export const Step0 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const base = useSelector(state => state.base)
    const { handleSubmit } = useForm({ defaultValues: { base } })

    const onSubmit = (data) => {
        dispatch(chooseBase(data.base))
        history.push("./step1")
    }

    return (<div class="container">
        <div class="row">
            <div class="col-md-4">
                <Timeline />
            </div>
            <div class="col-md-8"><form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Hello, I'am Kunal Wani. I'm here to help you reduce your medical bills. Please click on my medicines to begin.</p>
                </div>
                <div class="cta-container">
                    {/* <button class="btn dark-blue">Buy Medicines</button> */}
                    {/* <button>Explore other features</button> */}
                    <Link class="btn btn-default btn-lg" to="/step1">Buy Medicines</Link>
                    <Link class="btn btn-secondary btn-lg" to="/other-features">Explore other features</Link>
                </div>
            </form>
            </div>
            {/* <div class="col-md-3"></div> */}
        </div>
    </div>)
}
