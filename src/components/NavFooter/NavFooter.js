import React, { Component } from 'react'
import $ from 'jquery'
import SlidesPreview from './SlidesPreview/SlidesPreview.js'


import './navFooter.css'

import bgImg from "./../../static/img/logo.png"

class SocialLinks extends Component {
    onLinkClick(e) {
        let target = $(e.target)
        let slideNumber = target.data('slideNumber')
        let activeSlideNumber = $('.footer-navigation-links__link a.active').data('slideNumber')
        $('.footer-navigation-links__link a').removeClass('active');
        target.addClass('active')
        this.props.changeSlide(Number(activeSlideNumber), Number(slideNumber));
    }

	render () {
		return (
			<div className='nav-footer'>
                <div className='nav-footer__burger-btn'>
                    <img src={bgImg} />
                </div>
                <div className='nav-footer__navigation'>
                    <ul className='footer-navigation-links'>
                        <li className='footer-navigation-links__link'><a href='#'>PREV</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)} ><a data-slide-number="1" className="active" href='#'>01</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="2" href='#'>02</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="3" href='#'>03</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="4" href='#'>04</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="5" href='#'>05</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="6" href='#'>06</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="7" href='#'>07</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="8" href='#'>08</a></li>
                        <li className='footer-navigation-links__link' onClick={this.onLinkClick.bind(this)}><a data-slide-number="9" href='#'>09</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>NEXT</a></li>
                    </ul>
                </div>
                <SlidesPreview />
            </div>
		)
	}
}

export default SocialLinks;