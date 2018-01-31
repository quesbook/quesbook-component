/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbRadio extends Component {
    render() {
        const {className, value, changeHandler, style, label, name, fontStyle, id} = this.props;
        return (
            <div style={{height: fontStyle.fontSize, ...fontStyle}}>
                <input 
                    id={id}
                    type="radio"
                    value={value}
                    style={style}
                    name={name}
                    onClick={()=> changeHandler(value)}/>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
        );
    }
}

export default QbRadio;