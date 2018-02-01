/**
 * Created by az on 2017/7/20.
 */
import React, {Component} from 'react';
import up from '../assets/image/icon/caret-up@3x.png';
import down from '../assets/image/icon/caret-down@3x.png';
import colon from '../assets/image/icon/colon.png';

class QbTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hour: 1,
            minute: 0,
            periods: 'AM',
            displayPicker: false,
            notSelect: true, // style is different before first slect
            dropDownOffset: 0,
        };
        this.clickEvent = null;
        this.componentOpen = this.componentOpen.bind(this);
        this.componentClose = this.componentClose.bind(this);
    }
    padNumber(num, fill) {
        let len = ('' + num).length;
        return (new Array(
            fill > len ? fill - len + 1 || 0 : 0
        ).join(0) + num);
    }
    addHour() {
        if (this.state.hour === 12) {
            let p = this.state.periods==='AM'?'PM':'AM';
            this.setState({
                hour: 1,
                periods: p,
            })
        } else {
            this.setState((prevState, props) => ({
                hour: prevState.hour + 1,
            }));
        }

    }
    minHour() {
        if (this.state.hour === 1) {
            let p = this.state.periods==='AM'?'PM':'AM';
            this.setState({
                hour: 12,
                periods: p,
            })
        } else {
            this.setState((prevState, props) => ({
                hour: prevState.hour - 1,
            }));
        }
    }
    addMinute(interval) {
        let realMinute = (this.state.minute + interval) % 60;
        this.setState({
            minute: realMinute,
        });
    }
    minMinute(interval) {
        let min = this.state.minute - interval;
        let realMinute = min<0? min+60: min;
        this.setState({
            minute: realMinute,
        });
    }
    togglePeriods() {
        let p = this.state.periods==='AM'?'PM':'AM';
        this.setState({
            periods: p,
        });
    }
    toggleDisplayPicker() {
        this.setState((prevState, props) => ({
            displayPicker: !prevState.displayPicker,
        }));
    }
    componentOpen() {
        const {id} = this.props;
        let event = (e)=> {
            let dropdown = document.getElementById(id);
            if (!dropdown.contains(e.target)) {
                this.componentClose(e);
            }
        };
        this.clickEvent = event;
        document.addEventListener('click', event);
        this.toggleDisplayPicker();
    }
    componentClose(e) {
        if (e) e.stopPropagation();
        const {onPickerClose} = this.props;
        if (this.state.notSelect) {
            this.setState({
                notSelect: false
            });
        }
        onPickerClose(this.state);
        this.toggleDisplayPicker();
        if (this.clickEvent) {
            document.removeEventListener('click', this.clickEvent);
        }
    }
    renderMinutePicker() {
        const {option} = this.props;
        if (option.displayMinute) {
            let minStr = this.padNumber(this.state.minute, 2);
            return (
                <div className="filter-time-dropdown" style={style.minutePicker}>
                    <img style={{position: 'absolute', width: 8, left: -11}} src={colon} alt="colon"/>
                    <button className="btn btn-secondary"
                            style={style.pickerButton}
                            onClick={()=> this.addMinute.bind(this)(15)}>
                        <img style={style.upImg} src={up} alt=""/>
                    </button>
                    <div style={style.font}>{minStr}</div>
                    <button className="btn btn-secondary" style={style.pickerButton}
                            onClick={()=> this.minMinute.bind(this)(15)}>
                        <img style={style.downImg} src={down} alt=""/>
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }
    componentDidUpdate(){
        if (this.state.displayPicker) {
            const {id} = this.props;
            console.log(this.refs[id].getBoundingClientRect(), window.screen.width);
            const domRect = this.refs[id].getBoundingClientRect();
            if (domRect.right > window.screen.width) {
                const offset = window.screen.width - domRect.right;
                this.setState({
                    dropDownOffset: offset,
                })
            }
        }
    }
    render() {
        const {option, className, id} = this.props;
        let time = '';
        if (option.displayMinute) {
            time = `${this.state.hour}:${this.padNumber(this.state.minute, 2)} ${this.state.periods}`;
        } else {
            time = this.state.hour + ' ' + this.state.periods;
        }
        let display = this.state.displayPicker?'flex':'none';
        let minutePicker = this.renderMinutePicker();
        let btnClassName = 'btn btn-secondary timepicker' + (option.btnClassName?option.btnClassName: '');
        let finalClassName =  'qb-component-time-picker ' + (className?className: '');
        let fontColor = this.state.notSelect ? '#94989E': '#192230';
        let displayText = this.state.notSelect ? (option.placeHolder || ""): time;
        return (
            <div className={finalClassName} style={{position: 'relative', ...option.style}}>
                <button className={btnClassName}
                        style={{...style.button.defaultStyle, color: fontColor, ...option.btnStyle,}} onClick={()=> {
                        if (this.state.displayPicker) {
                            this.componentClose();
                        } else {
                            this.componentOpen();
                        }
                        this.toggleDisplayPicker.bind(this);
                }}>{displayText}</button>
                <div id={id} className="dropdown-menu dropdown-menu-left" ref={id}
                     style={{...style.timePicker, display: display, marginLeft: this.state.dropDownOffset}}>
                    <div className="filter-time-dropdown" style={style.hourPicker}>
                        <button className="btn btn-secondary"
                                style={style.pickerButton}
                                onClick={this.addHour.bind(this)}>
                            <img style={style.upImg} src={up} alt=""/>
                        </button>
                        <div style={style.font}>{this.state.hour}</div>
                        <button className="btn btn-secondary" style={style.pickerButton}
                                onClick={this.minHour.bind(this)}>
                            <img style={style.downImg} src={down} alt=""/>
                        </button>
                    </div>
                    {minutePicker}
                    <div className="filter-time-dropdown" style={style.periodsPicker}>
                        <button className="btn btn-secondary" style={style.pickerButton}
                                onClick={this.togglePeriods.bind(this)}>
                            <img style={style.upImg} src={up} alt=""/>
                        </button>
                        <div style={style.font}>{this.state.periods}</div>
                        <button className="btn btn-secondary" style={style.pickerButton}
                                onClick={this.togglePeriods.bind(this)}>
                            <img style={style.downImg} src={down} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const picker= {
    flex: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
};
const style = {
    pickerButton: {
        height: 50,
        width: 50,
        border: 0,
        padding: 0,
        justifyContent: 'center',
    },
    upImg: {
        height: 12,
    },
    downImg: {
        height: 12,
    },
    timePicker: {
        height: 200,
        width: 275,
        border: '1px solid #cccccc',
        display: 'flex',
        flexDirection: 'row',
        padding: '20px 10px',
    },
    hourPicker: picker,
    minutePicker: {
        ...picker,
        justifyContent: 'center',
        position: 'relative',
    },
    periodsPicker: {
        ...picker,
        flex: 1.2
    },
    font: {
        fontSize: 56,
        fontFamily: 'Gotham Narrow A, Gotham Narrow B',
        fontWeight: 700,
    },
    button: {
        defaultStyle: {
            border: '1px solid #cccccc',
            lineHeight: 1,
            width: 150,
            height: 38,
            fontSize: 21,
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 500,
            fontFamily: 'Gotham A, Gotham B',
        },
    },
}

QbTimePicker.PropTypes = {
    option: React.PropTypes.shape({
        style: React.PropTypes.object,
        btnStyle:  React.PropTypes.object,
        btnClassName: React.PropTypes.string,
        displayMinute: React.PropTypes.bool,
    }),
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    onPickerClose:  React.PropTypes.func,
}
QbTimePicker.defaultProps = {
    option : {
        style: {},
        btnStyle:  {},
        btnClassName: '',
        displayMinute: false,
    },
    className: '',
    onPickerClose: ()=> {}
}

export default QbTimePicker;