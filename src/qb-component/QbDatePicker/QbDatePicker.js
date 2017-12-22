/**
 * Created by az on 2017/7/20.
 */
import React, {Component} from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './QbDatePicker.scss';

/*eslint-disable*/
class QbDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : null,
            endDate: null,
            focusedInput: null,
            singleDate: null,
            focused: false,
        };
    }
    datesChange({startDate, endDate}) {
        const {onDatesChange} = this.props;
        if(startDate) {
            this.setState({
                startDate,
            });
        };
        if(endDate) {
            this.setState({
                endDate,
            });
        }
        onDatesChange(startDate, endDate);
    }
    dateChange(date) {
        const {onDateChange} = this.props;
        this.setState({singleDate: date});
        onDateChange(date);
    }
    renderPicker() {
        const {singlePicker, icon, small} = this.props.option;
        if (singlePicker) {
            const id = this.props.id;
            return (
                <SingleDatePicker date = {this.state.singleDate}
                    onDateChange={this.dateChange.bind(this)}
                    focused={this.state.focused}
                    small={small}
                    readOnly={true}
                    id={id}
                    onFocusChange={focusedInput => {
                        this.setState({ focused: focusedInput.focused });
                    }}
                />
            );
        } else {
            const {startDateId, endDateId} = this.props;
            return (
                <DateRangePicker
                    startDateId={startDateId}
                    endDateId={endDateId}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange = {({startDate, endDate})=> this.datesChange({startDate, endDate})}
                    small={small}
                    readOnly={true}                    
                    customInputIcon={icon}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
            );
        }
    }
    render() {
        const {option, className} = this.props;
        let picker = this.renderPicker();
        let finalClass = className?className: '';
        return (
            <div style={option.style} className={finalClass}>
                {picker}
            </div>
        )
    }
}

QbDatePicker.propTypes = {
    id: React.PropTypes.string,
    option: React.PropTypes.shape({
        style: React.PropTypes.object,
        icon: React.PropTypes.node,
        singlePicker: React.PropTypes.bool,
        small: React.PropTypes.bool,
    }),
    onDateChange: React.PropTypes.func,
    onDatesChange: React.PropTypes.func,
    className: React.PropTypes.string,
}
QbDatePicker.defaultProps = {
    option: {
        style: {},
        icon: null,
        singlePicker: false,
    },
    onDateChange: ()=> {},
    onDatesChange: ()=> {},
    className: ''
}

export default QbDatePicker;
