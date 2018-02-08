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
            focusedInput: null,
            focused: false,
        };
    }
    datesChange({ startDate, endDate }) {
        const { onDatesChange } = this.props;
        onDatesChange(startDate, endDate);
    }
    dateChange(date) {
        const { onDateChange } = this.props;
        onDateChange(date);
    }
    get enhancementProps() {
        const ret = {};
        const { orientation, allowPastDays, verticalHeight, disabled, displayFormat } = this.props;
        if (allowPastDays) {
            ret.isOutsideRange = () => { };
        }
        if (orientation) {
            ret.orientation = orientation;
            ret.verticalHeight = verticalHeight || 350
        }

        ret.disabled = disabled;
        ret.displayFormat = displayFormat;

        return ret;
    }
    renderPicker() {
        const { singlePicker, icon, small, placeHolder } = this.props.option;
        if (singlePicker) {
            const id = this.props.id;
            return (
                <SingleDatePicker
                    {...this.enhancementProps}
                    date={this.props.singleDate}
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
            const { startDateId, endDateId, startDate, endDate } = this.props;
            return (
                <DateRangePicker
                    {...this.enhancementProps}
                    startDateId={startDateId}
                    endDateId={endDateId}
                    startDate={startDate} // momentPropTypes.momentObj or null,
                    endDate={endDate} // momentPropTypes.momentObj or null,
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
    singleDate: React.PropTypes.object,
    startDate: React.PropTypes.object,
    endDate: React.PropTypes.object,
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
