/**
 * Created by az on 2017/7/20.
 */
import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './QbDatePicker.scss';

/*eslint-disable*/
class QbDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            singleDate: null,
            focused: false,
        };
    }
    datesChange({ startDate, endDate }) {
        const { onDatesChange } = this.props;
        if (startDate) {
            this.setState({
                startDate,
            });
        };
        if (endDate) {
            this.setState({
                endDate,
            });
        }
        onDatesChange(startDate, endDate);
    }
    dateChange(date) {
        const { onDateChange } = this.props;
        this.setState({ singleDate: date });
        onDateChange(date);
    }
    get enhancementProps() {
        const ret = {};
        const { orientation, allowPastDays, verticalHeight } = this.props;
        if (allowPastDays) {
            ret.isOutsideRange = () => { };
        }
        if (orientation) {
            ret.orientation = orientation;
            ret.verticalHeight = verticalHeight || 350
        }
        return ret;
    }
    renderPicker() {
        const { singlePicker, icon, small, placeHolder } = this.props.option;
        if (singlePicker) {
            const id = this.props.id;
            return (
                <SingleDatePicker
                    {...this.enhancementProps}
                    date={this.state.singleDate}
                    onDateChange={this.dateChange.bind(this)}
                    placeholder={placeHolder}
                    focused={this.state.focused}
                    small={small}
                    readOnly={true}
                    customInputIcon={icon}
                    id={id}
                    onFocusChange={focusedInput => {
                        this.setState({ focused: focusedInput.focused });
                    }}
                />
            );
        } else {
            const { startDateId, endDateId } = this.props;
            return (
                <DateRangePicker
                    {...this.enhancementProps}
                    startDateId={startDateId}
                    endDateId={endDateId}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.datesChange({ startDate, endDate })}
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
        const { option, className } = this.props;
        let picker = this.renderPicker();
        let finalClass = className ? className : '';
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
    placeHolder: React.PropTypes.string,
    allowPastDays: React.PropTypes.bool,
    orientation: React.PropTypes.oneOf(['horizontal', 'vertical']),
    verticalHeight: React.PropTypes.number
}
QbDatePicker.defaultProps = {
    option: {
        style: {},
        icon: null,
        singlePicker: false,
    },
    onDateChange: () => { },
    onDatesChange: () => { },
    className: '',
    allowPastDays: false
}

export default QbDatePicker;
