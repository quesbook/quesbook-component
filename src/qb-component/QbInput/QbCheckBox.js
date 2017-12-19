/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,   
        }
    }
    render() {
        const {className, value, changeHandler, style, label, fontStyle} = this.props;
        return (
            <div style={{height: fontStyle.fontSize, ...fontStyle}}>
                <label>
                    <input 
                        type="checkbox"
                        value={value}
                        style={style}
                        checked={this.state.checked}
                        onChange={()=> {
                            changeHandler(!this.state.checked? value: null);
                            this.setState({
                                checked: !this.state.checked
                            });
                        }}/>
                    {label}
                </label>
            </div>
        )
    }
}

export default QbCheckBox;
