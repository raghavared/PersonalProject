import React from 'react'
import './index.css'

export default function Home() {
    return (
        // <div>Home</div>
        <div className='main-container'>
            {/* <div class="ripples" onBlurCapture >
                <div class='heading'>
                    <h2>Raghava Portfolio</h2>
                </div>
                <div>
                <div class="white_line_heading"></div>
                </div>
            </div> */}
            <div>
                <div className="common-div-content">
                    <h2 className="pull-left full-width text-center m-b-5" data-aos="fade-up" id='about'>About</h2>
                    <label className="pull-left full-width text-center fs-16 persona-color f-w-400 m-t-15" data-aos="fade-up">We Would love to connect to you</label>
                </div>
                <div className="common-div-content" >
                    <h2 className="pull-left full-width text-center m-b-5" data-aos="fade-up" id='roadmap'>RoadMap </h2>
                    <label className="pull-left full-width text-center fs-16 persona-color f-w-400 m-t-15" data-aos="fade-up">We’re not just releasing a roadmap; we’re laying out the blueprint to help guide and build a community-centric, world-leading web three brand.</label>
                </div>
                <div className="common-div-content">
                    <h2 className="pull-left full-width text-center m-b-5" data-aos="fade-up" id='blueprint'>Blue Print </h2>
                    <label className="pull-left full-width text-center fs-16 persona-color f-w-500 m-t-15" data-aos="fade-up">We’re not just releasing a roadmap; we’re laying out the blueprint to help guide and build a community-centric, world-leading web three brand.</label>
                </div>
                <div className="common-div-content" >
                    <h2 className="pull-left full-width text-center m-b-5" data-aos="fade-up" id='contact'>Contact </h2>
                    <label className="pull-left full-width text-center fs-16 persona-color f-w-400 m-t-15" data-aos="fade-up">We are happy to serve you</label>
                </div>
            </div>
        </div>
    )
}
