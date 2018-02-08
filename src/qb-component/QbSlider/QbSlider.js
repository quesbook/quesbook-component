/**
 * Created by az on 2017/7/26.
 */
import React, {Component} from 'react';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import './QbSlider.scss';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);

class QbSlider extends Component {
    sliderChange(value) {
        const {changeHandler } = this.props;
        const {maxPrice} = this.props;
        let low = ((maxPrice/100)* parseInt(value[0])).toFixed(0);
        let high = ((maxPrice/100)* parseInt(value[1])).toFixed(0);
        return changeHandler(low, high);
    }
    render () {
        const {style, maxPrice, value} = this.props;
        let handlerStyle = {height: 28, width: 28, marginLeft: -14, marginTop: -13,
            border: 'solid 1px rgba(25, 34, 48, 0.1)'};
        let lowPirce = 0;
        let highPrice = maxPrice;
        if (value && Object.keys(value).length !== 0) {
            lowPirce = value.low;
            highPrice = value.high;
        }
        const low = (parseInt(lowPirce) * 100/maxPrice).toFixed(0);
        const high = (parseInt(highPrice) * 100/maxPrice).toFixed(0);
        return (
            <div style={style}>
                <Range defaultValue={[0, 100]}
                    step={100/maxPrice}
                    value={[low, high]}
                    marks={{100: '$'+((parseInt(highPrice)===parseInt(maxPrice))?
                        maxPrice+'+': highPrice)
                        , 0: '$'+ lowPirce}}
                    handleStyle={[handlerStyle, handlerStyle]}
                    trackStyle={[{height: 4, color: '#5d90e3', background: '#5d90e3'}]}
                    onChange={(value)=> this.sliderChange.bind(this)(value)}
                    pushable={1}/>
            </div>
        )
    }
}

export default QbSlider;
