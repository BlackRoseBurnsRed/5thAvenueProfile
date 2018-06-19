import React, { Component } from 'react'
import LoadingSlide from './../slides/Loading/LoadingSlide'
import AboutSlide from './../slides/About/AboutSlide'
import SocialLinks from './../SocialLinks/SocialLinks'
import NavFooter from './../NavFooter/NavFooter'
import OurGoalsSlide from './../slides/OurGoals/OurGoalsSlide'
import $ from 'jquery'

import './app.css'


class App extends Component {
    componentDidMount() {
        $('.slide').fadeOut(0);
        //$('.about-slide').fadeIn(500);
        $('.slide').height($('.wrapper').height() + 20);
        $('.social-links').height($('.wrapper').height() + 20);
    }

    endLoading() {
        $('.social-links').fadeIn(1);
        $('.nav-footer').fadeIn(1);
        $('.about-slide').fadeIn(1);
        $('.loading-slide').fadeOut(500);


        setTimeout(() => {$('.loading-slide').addClass('hidden')}, 1000);
    }
    
    changeSlide(activeSlideNuber, newSlideNumber) {
        let slides = $('.slide')
        for (let i = 0; i < slides.length; i++) {
            let number = $(slides[i]).data('slideNumber')
            if (number == activeSlideNuber) {
                $(slides[i]).fadeOut(500)
            }
            if (number == newSlideNumber) {
                $(slides[i]).fadeIn(500)
            }
            debugger
        }
    }

    render() {
        return (
            <div>
                <LoadingSlide endLoading={this.endLoading} />
                <div className='main-content'>
                    <div className='wrapper'>
                        <SocialLinks />
                        <AboutSlide />
                    </div>
                    <NavFooter changeSlide={this.changeSlide}/>
                </div>
            </div>
        )
    }
}

export default App;
