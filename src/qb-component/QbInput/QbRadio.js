/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbRadio extends Component {
    render() {
        const {className, value, changeHandler, style, label, name, id} = this.props;
        return (
            <div style={style}>
                <input 
                    id={id}
                    type="radio"
                    value={value}
                    name={name}
                    onClick={()=> changeHandler(value)}/>
                <label htmlFor={id} style={{marginBottom: 0}}>
                    {label}
                </label>
            </div>
        );
    }
}

export default QbRadio;