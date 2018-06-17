import React, { Component } from 'react'

import './socialLinks.css'
import './socialLinks.scss'

class SocialLinks extends Component {
	render () {
		return (
			<aside className="social-links">
				<div className="social-links__twitter"></div>
				<div className="social-links__dribble"></div>
				<div className="social-links__facebook"></div>
				<div className="social-links__instagram"></div>
			</aside>
		)
	}
}

export default SocialLinks;