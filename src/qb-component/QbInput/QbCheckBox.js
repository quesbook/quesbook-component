/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
// import './QbInput.scss';

/*eslint-disable*/
class QbCheckBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {className, value, changeHandler, style, label, fontStyle, id, checked} = this.props;
        return (
            <div style={{height: fontStyle.fontSize, ...fontStyle}}>
                <input 
                    id={id}
                    className="qb-checkbox"
                    type="checkbox"
                    value={value}
                    style={style}
                    checked={checked}
                    onChange={()=> {
                        changeHandler(!checked);
                    }}/>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
        )
    }
}

QbCheckBox.propTypes = {
    id: React.PropTypes.string.isRequired,
};

export default QbCheckBox;
