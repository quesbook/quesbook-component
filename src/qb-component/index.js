/**
 * Created by az on 2017/7/12.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QbLayout from './QbLayout';
import QbHeader from './QbHeader';
import QbFooter from './QbFooter';
import {QbDataPicker, QbTimePicker} from './QbDatePicker';

import QbButton from './QbButton';
import {QbCheckBox, QbRadio, QbInput, QbSwitcher} from './QbInput';
import {QbModalBody, QbModalHeader, QbModalFooter, QbModal} from './QbModal';
import {QbDropDown, QbDropDownDivider, QbDropDownItem} from './QbDropDown';
import './scss/_variables.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            show: false,
            switchState: true,
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
    render() {
        return(
            <div>
                <QbLayout>
                    <QbButton label="hello"
                              className="btn btn-primary"
                              size="small"
                              clickHandler={this.toggleModal.bind(this)} dataTarget="#modal" dataToggle='modal'/>
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
                    <QbDropDown id="B" label="nihao" inputType="button" dropdownStyle={{width: 400}} compStyle={{position: 'relative', width: 400}}>
                        <QbDropDownItem label="hello"/>
                        <QbDropDownDivider/>
                    </QbDropDown>
                    <QbSwitcher switchState={this.state.switchState} clickHandler={this.switchHandler.bind(this)}/>
                    <QbTimePicker/>
                </QbLayout>
            </div>
        )
    }
}

const div = document.getElementById('root');
ReactDOM.render(<App />, div);
