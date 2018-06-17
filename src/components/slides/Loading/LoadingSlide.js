import React, { Component } from 'react'
import $ from 'jquery'

import './loadingSlide.css'

class MainSlide extends Component {
	componentDidMount() {
		$('.loading__caption').fadeOut(0)
		let loadingStep = 10;
		let intervalId = setInterval(function() {
			let $progress = $('.loading__line_progress')
			let width = $progress.width() / $progress.parent().width() * 100
			if (width + loadingStep >= 100) {
				$progress.css({width: '100%'})
				clearInterval(intervalId)
				$('.loading__line').fadeOut(1000)
				$('.loading__caption').fadeIn(1500)
			} else {
				$progress.css({
					width: width + loadingStep + '%',
				})
			}
			
		}, 250);
	}

	render () {
		return (
			<div className="main-slide">
				<div className="loading">
					<div className="loading__line">
						<div className="loading__line_progress"></div>	
					</div>	
					<div className="loading__caption hidden">Let`s walk arount</div>
				</div>
			</div>
		)
	}
}

export default MainSlide;