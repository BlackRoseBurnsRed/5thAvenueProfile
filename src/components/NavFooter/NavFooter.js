import React, { Component } from 'react'

import './navFooter.css'

class SocialLinks extends Component {
	render () {
		return (
			<div className='nav-footer'>
                <div className='nav-footer__burger-btn'></div>
                <div className='nav-footer__navigation'>
                    <ul className='footer-navigation-links'>
                        <li className='footer-navigation-links__link'><a href='#'>PREV</a></li>
                        <li className='footer-navigation-links__link'><a className="active" href='#'>01</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>02</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>03</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>04</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>05</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>06</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>07</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>08</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>09</a></li>
                        <li className='footer-navigation-links__link'><a href='#'>NEXT</a></li>
                    </ul>
                </div>
            </div>
		)
	}
}

export default SocialLinks;