/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbCheckBox extends Component {
    render() {
        const {className, value, changeHandler, style, label, fontStyle} = this.props;
        return (
            <div style={{height: fontStyle.fontSize, ...fontStyle}}>
                <label>
                    <input type="checkbox"
                           value={value}
                           style={style}
                           onChange={(e)=> changeHandler.bind(this)(e)}/>
                    {label}
                </label>
            </div>
        )
    }
}

export default QbCheckBox;
