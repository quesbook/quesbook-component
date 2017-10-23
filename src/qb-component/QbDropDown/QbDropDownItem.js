/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbDropDownItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            label: props.label,
            value: props.value,
        }
    }
    clickHandler() {
        const {onClick} = this.props;
        return onClick(this.state);
    }
    render() {
        const {className, style, href, label} = this.props;
        let c = className?className: '';
        let itemClass = "dropdown-item " + c;
        return (
            <a className={itemClass} href={href} style={style} onClick={this.clickHandler.bind(this)}>{label}</a>
        )
    }
}

export default QbDropDownItem;
