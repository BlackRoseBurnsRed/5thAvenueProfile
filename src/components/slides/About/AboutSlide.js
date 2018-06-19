import React, { Component } from 'react'
import $ from 'jquery'

import './aboutSlide.css'

import aboutBg from './../../../static/img/about-page-bg.png'
import eyeImg from './../../../static/img/eye.png'
import yellowLogo from './../../../static/img/yellow-logo.png'

class AboutSlide extends Component {
	render () {
		return (
			<div className="about-slide slide slide-1" data-slide-number="1">
				<div className="about-slide__left-column">
					<div className="progress-line">
						<span className="slide_number">01</span>
						<div className="load__line">
							<div className="load__line_progress"></div>	
						</div>
						<span className="slide_number">02</span>
					</div>
					<div className="about-slide_text">
						<p>
							Ante leo quis diam cubilia Mauris tempus non non rutrum dui diam etiam parturient tellus donec class mus dis. Tortor.
						</p>
						<p>
							Maecenas torquent cubilia, eu taciti nulla in suspendisse blandit montes sodales, nulla torquent pharetra rutrum ut tellus convallis. Mi tempor.
						</p>
						<p>
							Mauris ridiculus litora vulputate curabitur ullamcorper egestas consectetuer sed sit montes quisque tempor. Facilisis felis. Netus. Erat ultrices gravida. Ipsum.
						</p>
					</div>
				</div>		
				<div className="about-slide__right-column">
					<div className="about-slide__right-column_eye">
						<img src={eyeImg} />
					</div>
					<div className="about-slide__right-column_title">
						<p className="abount-slide__title">
							SOMETHING <br />
							ABOUT US
						</p>
					</div>
				</div>		
				<div className="about-slide__big-logo_yellow">
					<img src={yellowLogo} />
				</div>
			</div>
		)
	}
}

export default AboutSlide;