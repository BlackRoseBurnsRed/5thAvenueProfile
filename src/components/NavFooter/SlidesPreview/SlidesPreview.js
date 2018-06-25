import React, {Component} from 'react'

import './slidesPreview.css'

import teamDescriptionBg from './../../../static/img/previewBG/2.png'
import ourRulesBg from './../../../static/img/previewBG/3.png'
import portfolioBg from './../../../static/img/previewBG/4.png'



class SlidesPreview extends Component {
    render() {
        return (
            <div className='slides-preview'>
                <div className='slide-preview'>
                    <img src={teamDescriptionBg} />
                    <div className='slide-preview__slide-number'>02</div>
                </div>
                <div className='slide-preview'>
                    <img src={ourRulesBg} />
                    <div className='slide-preview__slide-number'>03</div>
                </div>
                <div className='slide-preview'>
                    <img src={portfolioBg} />
                    <div className='slide-preview__slide-number'>04</div>
                </div>
            </div>
        )
    }
}

export default SlidesPreview