import React, { Component } from 'react';

class Timeline extends Component {
    render() {
        return (<div class="timeline-container">
            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>Upload a Prescription</h3>
                    {/* <span>Some work experience</span> */}
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                </div>
            </div>

            <div class="timeline-block timeline-block-left">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>Enter Contact details</h3>
                    {/* <span>Some work experience</span> */}
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                </div>
            </div>

            <div class="timeline-block timeline-block-right">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>Confirm Order</h3>
                    {/* <span>Some work experience</span> */}
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                </div>
            </div>
            <div class="timeline-block timeline-block-left">
                <div class="marker"></div>
                <div class="timeline-content">
                    <h3>Payment</h3>
                    {/* <span>Some work experience</span> */}
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                </div>
            </div>
        </div>)
    }
}
export default Timeline;