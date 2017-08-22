/**
 * Created by az on 2017/7/20.
 */
import React, {Component} from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './QbDatePicker.scss';

/*eslint-disable*/
class QbDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : null,
            endDate: null,
            focusedInput: null,
        };
    }
    render() {
        console.log('Tag date :', this.state);
        const {onDatesChange} = this.props;
        return (
            <DateRangePicker startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                             endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                             onDatesChange = {(startDate, endDate)=> onDatesChange(startDate, endDate)}
                             // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                             focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                             onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
        )
    }
}

export default QbDatePicker;
