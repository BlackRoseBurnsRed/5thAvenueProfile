import React, { Component } from 'react'
import LoadingSlide from './../slides/Loading/LoadingSlide'
import AboutSlide from './../slides/About/AboutSlide'
import SocialLinks from './../SocialLinks/SocialLinks'
import NavFooter from './../NavFooter/NavFooter'

import './app.css'


class App extends Component {
    render() {
        return (
            <div>
                <SocialLinks />
                <AboutSlide />
                <NavFooter />
            </div>
        )
    }
}

export default App;
