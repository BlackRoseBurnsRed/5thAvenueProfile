import React, { Component } from 'react'
import $ from 'jquery'

import './mainSlide.css'

class MainSlide extends Component {
	componentDidMount() {
		let loadingStep = 3;
		let intervalId = setInterval(function() {
			let $progress = $('.loading__progress')
			let width = $progress.width() / $progress.parent().width() * 100
			if (width + loadingStep >= 100) {
				$progress.css({width: '100%'})
				clearInterval(intervalId)
			} else {
				$progress.css({width: width + loadingStep + '%'})
			}
			
		}, 250);
	}

	render () {
		return (
			<div className="main-slide">
				<div className="loading">
					<div className="loading__progress"></div>
				</div>
			</div>
		)
	}
}

export default MainSlide;