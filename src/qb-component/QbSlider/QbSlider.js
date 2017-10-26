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
    constructor(props) {
        super(props);
        this.state = {
            value: {
                low: 0,
                high: props.maxPrice,
            }
        }
    }
    sliderChange(value) {
        const {changeHandler } = this.props;
        const {maxPrice} = this.props;
        this.setState((prevState, props)=> {
            return {...prevState.value,
                value: {
                    low: ((maxPrice/100)* value[0]).toFixed(1),
                    high: ((maxPrice/100)* value[1]).toFixed(1),}
                }
        });
        // this.value = {
        //     ...this.value,
        //     low: ((maxPrice/100)* value[0]).toFixed(1),
        //     high: ((maxPrice/100)* value[1]).toFixed(1),
        // };
        return changeHandler(this.state.value.low, this.state.value.high);
    }
    render () {
        const {style} = this.props;
        let handlerStyle = {height: 28, width: 28, marginLeft: -14, marginTop: -13,
            border: 'solid 1px rgba(25, 34, 48, 0.1)'};
        return (
            <div style={style}>
                <Range defaultValue={[0,100]}
                       marks={{100: this.state.value.high, 0: this.state.value.low}}
                       handleStyle={[handlerStyle, handlerStyle]}
                       trackStyle={[{height: 4, color: '#5d90e3', background: '#5d90e3'}]}
                       onChange={(value)=> this.sliderChange.bind(this)(value)}
                       pushable={1}/>
            </div>
        )
    }
}

QbSlider.propTpye = {

}

export default QbSlider;
