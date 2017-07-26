/**
 * Created by az on 2017/7/26.
 */
import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import './QbSlider.scss';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class QbSlider extends Component {
    sliderChange(value) {
        const {changeHandler, maxPrice} = this.props;
        return changeHandler(((maxPrice/100)* value[0]).toFixed(1), ((maxPrice/100)* value[1]).toFixed(1));
    }
    render () {
        const {maxMark, minMark, maxPrice, style} = this.props;
        return (
            <div style={style}>
                <Range defaultValue={[0,100]}
                       marks={{100: maxMark, 0: minMark}}
                       handleStyle={[{height: 28, width: 28, marginLeft: -14, marginTop: -13,
                           border: 'solid 1px rgba(25, 34, 48, 0.1)'}]}
                       trackStyle={[{height: 4, color: '#5d90e3', background: '#5d90e3'}]}
                       tipFormatter={value=> ((maxPrice/100)* value).toFixed(1)}
                       onChange={(value)=> this.sliderChange.bind(this)(value)}
                       pushable={1}/>
            </div>
        )
    }
}

export default QbSlider;
