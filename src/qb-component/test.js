/**
 * Created by az on 2017/7/24.
 */
import React, {Component} from 'react';
import QbLayout from './QbLayout';
import {QbDatePicker, QbTimePicker} from './QbDatePicker';

import QbButton from './QbButton';
import QbHighlight from './QbHighlight';
import QbScore from './QbScore';
import {QbCheckBox, QbRadio, QbInput, QbSwitcher} from './QbInput';
import {QbModalBody, QbModalHeader, QbModalFooter, QbModal} from './QbModal';
import {QbDropDown, QbDropDownDivider, QbDropDownItem} from './QbDropDown';
import QbMessageCard from './QbMessageCard';
import QbSlider from './QbSlider';
import {QbCard} from './QbCard';
import CloseIcon from './assets/image/icon/x-icon@3x.png';

import './scss/_variables.scss';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state ={
            show: false,
            switchState: true,
            showCard: true,
        }
    }
    toggleModal () {
        this.setState({
            show: !this.state.show
        });
        console.log('Tag show is, ', this.state.show);
    }
    switchHandler() {
        console.log('Tag click');
        this.setState((prevState, props) => ({ switchState: !prevState.switchState}));
    }
    messageToggle() {
        this.setState((prevState, props)=> ({
            showCard: !prevState.showCard
        }));
    }
    sliderChange(lowPrice, highPrice) {
        console.log(lowPrice, highPrice);
    }
    buttonIconClick() {
        alert('icon cliasc');
    }
    render() {
        const dropDownContent = [{
            label: 'abc',
            value: 'abc',
        },{
            label: 'bcd',
            value: 'bcd',
        },{
            label: 'cde',
            value: 'cde',
        }];
        return (
            <div>
                <QbScore content="32"></QbScore>

                <QbScore content="32" style={{'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px'}}></QbScore>
                <h1>
                    My StudyPlan <QbHighlight content="Quesbook Web"></QbHighlight>
                </h1>
                <QbButton label="hello"
                          className="btn btn-secondary"
                          size="small"
                          iconClick={this.buttonIconClick.bind(this)}
                          clickHandler={this.toggleModal.bind(this)} dataTarget="#modal" dataToggle='modal'>
                    <img src={CloseIcon} style={{height: 'inherit', width: 'inherit'}}/>
                </QbButton>
                <QbCheckBox label="hello" changeHandler={()=> alert('hi')} fontStyle={{fontSize: 16}}/>
                <QbRadio label="hello" changeHandler={()=> alert('hello')} fontStyle={{fontSize: 16}}/>
                <QbInput size="small" changeHandler={(e)=> alert(e.target.value)}/>
                <QbModal target="modal" >
                    <QbModalHeader>
                        <div>header</div>
                    </QbModalHeader>
                    <QbModalBody>
                        <div>body</div>
                    </QbModalBody>
                    <QbModalFooter>
                        <QbButton label="close" dataTarget="#modal" dataToggle='modal'/>
                    </QbModalFooter>
                </QbModal>
                <QbDropDown defaultData={{label: "nihao", value: 'hello'}} default inputType="input" btnStyle={{width: 350, textAlign: 'left'}}
                            dropdownStyle={{width: 400}} compStyle={{position: 'relative', width: 400}}
                            content ={dropDownContent} onChange={(data)=> console.log('TAg data:', data)}
                />
                <QbSwitcher switchState={this.state.switchState} clickHandler={this.switchHandler.bind(this)}/>
                <QbTimePicker ensureTime={(time)=> console.log('Tag time is:', time)}/>
                <QbDatePicker/>
                <QbButton label="show message"
                          className="btn btn-primary"
                          size="small"
                          clickHandler={this.messageToggle.bind(this)}/>
                <QbMessageCard display={this.state.showCard}
                               title="hello!"
                               content="ha lou a !"
                               onCancelClick={this.messageToggle.bind(this)}/>
                <QbSlider maxMark="$10+"
                          minMark="Free!"
                          maxPrice={15}
                          style={{height: 100, width:300}}
                          changeHandler={this.sliderChange.bind(this)}/>
                <QbCard cardStyle={{height: 120, width: 500}} avatarSrc={CloseIcon} rate={3.5}/>
            </div>
        )
    }
}
