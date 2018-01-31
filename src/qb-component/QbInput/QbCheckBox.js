/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import './QbInput.scss';

/*eslint-disable*/
class QbCheckBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {className, value, changeHandler, style, label, id, checked} = this.props;
        return (
            <div style={style}>
                <input 
                    id={id}
                    className="qb-checkbox"
                    type="checkbox"
                    value={value}
                    checked={checked}
                    onChange={()=> {
                        changeHandler(!checked, value);
                    }}/>
                <label htmlFor={id} style={{marginBottom: 0}}>
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
