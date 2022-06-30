import React from 'react'
import "./LandingPageContent.css"
import banner from "../../images/banner/banner.jpg"

function LandingPageContent() {
    return (
        <div className='LandingPage_container'>
            
            <p className='LandingPage_container_title'> Unlimited films, TV programmes and more.</p>
            <p className='LandingPage_container_subtitle'>Watch anywhere. Cancel at anytime</p>
            <p className='LandingPage_container_des'>Ready to watch? Enter your email to create or restart watching</p>
            <div className='landing_input'>
                <input />
                <button>Get Started</button>
            </div>
            

        </div>
    )
}
export default LandingPageContent
