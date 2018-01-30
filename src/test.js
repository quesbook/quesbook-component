/**
 * Created by az on 2017/7/24.
 */
import React, { Component } from 'react';
import './qb-component/_default.scss';
import QbLayout from './qb-component/QbLayout';
import { QbDatePicker, QbTimePicker } from './qb-component/QbDatePicker';

import QbRateStar from './qb-component/QbRateStar';
import QbButton from './qb-component/QbButton';
import QbHighlight from './qb-component/QbHighlight';
import QbScore from './qb-component/QbScore';
import QbStar from './qb-component/QbStar';
import QbImgSection from './qb-component/QbImgSection';
import { QbCheckBox, QbRadio, QbInput, QbSwitcher } from './qb-component/QbInput';
import { QbModalBody, QbModalHeader, QbModalFooter, QbModal } from './qb-component/QbModal';
import { QbDropDown, QbDropDownDivider, QbDropDownItem } from './qb-component/QbDropDown';
import QbSlider from './qb-component/QbSlider';
import { QbCard } from './qb-component/QbCard';
import CloseIcon from './qb-component/assets/image/icon/x-icon@3x.png';
import SearchIcon from './qb-component/assets/image/icon/search.svg';
import CalendarIcon from './qb-component/assets/image/icon/calendar.svg';
import { QbTabs, QbTab } from './qb-component/QbTabs';
import QbCollapse from './qb-component/QbCollapse';
import Collapse from 'rc-collapse';
import QbMessageCard from './qb-component/QbMessageCard';
import QbProgressBar from './qb-component/QbProgressBar';
import 'rc-collapse/assets/index.css';
import { QbAvatar } from './qb-component/QbHeader';
import QbAlert from './qb-component/QbAlert';
import { QbNavLeft, QbNavDDL } from './qb-component/QbNavLeftDDL';
import Rheostat from 'rheostat';
import QbEClassCardTemplate from './qb-component/QbEClassCardTemplate';
import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';

const Panel = Collapse.Panel;

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            switchState: true,
            showCard: true,
            numlist: ['yahaha'],
            showModal: false,
            showAlert: false,
            showSpin: false,
            expand: false
        }
    }
    toggleModal() {
        this.setState({
            show: !this.state.show
        });
        console.log('Tag show is, ', this.state.show);
    }
    switchHandler() {
        console.log('Tag click');
        this.setState((prevState, props) => ({ switchState: !prevState.switchState }));
    }
    messageToggle() {
        this.setState((prevState, props) => ({
            showCard: !prevState.showCard
        }));
    }
    sliderChange(lowPrice, highPrice) {
        this.setState((prevState, props) => ({ switchState: !prevState.switchState }));
    }
    buttonIconClick() {
        alert('icon cliasc');
    }
    datesChange(start, end) {
        console.log(start, end);
    }
    dateChange(date) {
        console.log(date);
    }
    add() {
        console.log('Tag before numlist:', this.state.numlist);
        let a = this.state.numlist;
        a.push('another one');
        this.setState({
            numlist: a
        })
    }
    alertMessage() {
        QbAlert.error('hi', 'click<a href="http://stg.quesbook.com/api/v1/user/password?email=gzhang%2B3%40quesbook.com">Resend the email</a>', 300);
        QbAlert.info('hi', 'hello', 300);
        QbAlert.warning('hi', 'hello', 300);
        QbAlert.success('hi', 'hello', 300);
    }
    handleClickLoad = () => {
        let self = this;
        self.setState({
            showSpin: true
        }, () => {
            setTimeout(() => {
                self.setState({
                    showSpin: false
                })
            }, 600)
        })
    }
    onClickCard = () => {
        this.setState({
            expand: !this.state.expand
        })
    }
    render() {
        const dropDownContent = [{
            label: 'abc',
            value: 'abc',
        }, {
            label: 'bcd',
            value: 'bcd',
        }, {
            label: 'cde',
            value: 'cde',
        }, {
            label: 'def',
            value: 'def',
        }];
        let list = this.state.numlist.map((data, index) => {
            return <div key={index}>{data}</div>
        });
        console.log('Tag numlist:', this.state.numlist);
        let collapseContent = [{
            header:
            <div>
                <img src="" />
                <div style={{ color: '#ffffff' }}>hello</div>
            </div>,
            content: <div>hi</div>,
        }, {
            header:
            <div>
                <img src="" />
                <div>god</div>
            </div>,
            content: <div>like</div>
        }];
        const classCardData = {
            btnText: 'Finished',
            compClass: null,
            compStyle: { width: '450px', margin: 30 },
            expand: false,
            disabled: false,
            sectionName: 'math',
            courseName: 'E-Class for Opening, Transitional & Closing Sentences',
            startsAt: 'Jan. 15th at 5PM',
            description: 'Take this e-class to learn the important elements that go into writing and identifying effective paragraphs made up of opening, transitional and closing sentences. This class will teach you how to master this skill for the ACT',
            skillName: 'Analyzing Function'
        };
        const classCardData2 = { ...classCardData, expand: true, btnText: 'Join Class' }
        let paramQbNav = {
            itemList: [
                {
                    "key": "item01",
                    "value": "Item 01",
                    "href": "/",
                    "isRedirect": false
                }, {
                    "key": "item02",
                    "value": "Item 02",
                    "href": "/",
                    "isRedirect": false
                }
            ],
            queryStrName: 'keyNav',
        };
        return (
            <div style={{ marginLeft: 100 }}>
                <QbEClassCardTemplate
                    compStyle={{ margin: 30 }}
                    expand={this.state.expand}
                    cardClickHandler={this.onClickCard}
                    sectionName={'math'}
                    courseName={'E-Class for Opening, Transitional & Closing Sentences'}
                    startsAt={'Jan. 15th at 5PM'}
                    description={'Take this e-class to learn the important elements that go into writing and identifying effective paragraphs made up of opening, transitional and closing sentences.'}
                    skillName={'Analyzing Function'}
                >
                    <div>
                        明月几时有？把酒问青天。不知天上宫阙，今夕是何年。
                        我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                        转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？
                        人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
                    </div>
                </QbEClassCardTemplate>
                <p>可以选择过去的时间</p>
                <QbDatePicker
                    allowPastDays
                    startDateId="startDateId"
                    endDateId="endDateId"
                    option={{
                        icon: <img alt="icon" src={CalendarIcon} />,
                    }}
                    onDatesChange={this.datesChange.bind(this)}
                    onDateChange={this.dateChange.bind(this)} />
                <QbDatePicker
                    allowPastDays
                    id="testSingle"
                    option={{
                        singlePicker: true,
                        placeHolder: "2012-1-1"
                    }}
                    onDateChange={this.dateChange.bind(this)} />
                <p>不能选择过去的时间</p>
                <QbDatePicker
                    startDateId="startDateId"
                    endDateId="endDateId"
                    option={{
                        icon: <img alt="icon" src={CalendarIcon} />,
                        small: true
                    }}
                    onDatesChange={this.datesChange.bind(this)}
                    onDateChange={this.dateChange.bind(this)} />
                <QbDatePicker
                    id="testSingle"
                    option={{
                        singlePicker: true,
                        placeHolder: "2012-1-1"
                    }}
                    onDateChange={this.dateChange.bind(this)} />
                <QbDatePicker
                    id="testSingle"
                    option={{
                        icon: <img alt="icon" src={CalendarIcon} />,
                        singlePicker: true,
                        placeHolder: "today(2012-1-1)",
                        small: true
                    }}
                    onDateChange={this.dateChange.bind(this)} />
                <QbRateStar />
                <QbRateStar rate={3.3} compStyle={{ width: 'maxContent' }} />
                <QbRateStar starWidth={31.1} starHeight={30} rate={'3.75'} gap={8} />
                <QbRateStar starWidth={31.1} starHeight={30} rate={undefined} gap={8} />
                <QbNavLeft params={paramQbNav} />

                {/* <QbClassCard {...classCardData} /> */}

                <QbNavDDL params={paramQbNav} />
                <QbSwitcher switchState={this.state.switchState} clickHandler={this.switchHandler.bind(this)} />
                <QbSlider maxMark="$10+"
                    minMark="Free!"
                    maxPrice={15}
                    style={{ height: 100, width: 300 }}
                    changeHandler={this.sliderChange.bind(this)} />
                <QbSlider maxMark="$10+"
                    minMark="Free!"
                    maxPrice={15}
                    style={{ height: 80, width: '100%', padding: '0 15px', marginTop: 15 }}
                    changeHandler={this.sliderChange.bind(this)} />
                <Rheostat
                    min={1}
                    max={100}
                    values={[1, 100]}
                />
                <QbDropDown option={{
                    inputType: "button",
                    btnStyle: { width: 350, textAlign: 'left' },
                    style: { position: 'relative', width: 400, height: 52 },
                    dropdownStyle: { width: '100%' }
                }} content={dropDownContent}
                    onChange={(data) => {
                        console.log('TAg data:', data);
                        this.setState({ show: !this.state.show });
                    }} />
                <QbButton label="hello"
                    isSubmit="true"
                    className="btn btn-secondary btn-sm"
                    iconClick={this.buttonIconClick.bind(this)}
                    dataTarget="#azmodal" dataToggle='modal'>
                    <img src={CloseIcon} style={{ height: 'inherit', width: 'inherit' }} />
                </QbButton>
                <QbDropDown option={{
                    placeHolder: 'e.g. Apostrophes',
                    inputType: "input",
                    btnStyle: { width: 350, textAlign: 'left' },
                    style: { position: 'relative', width: 400, height: 52 },
                    dropdownStyle: { width: '100%' },
                    icon: <img alt="icon" src={CalendarIcon} />
                }} content={dropDownContent}
                    onChange={(data) => {
                        console.log('TAg data:', data);
                        this.setState({ show: !this.state.show });
                    }} />
                <QbDropDown option={{
                    placeHolder: 'e.g. Apostrophes',
                    inputType: "input",
                    btnStyle: { width: 350, textAlign: 'left' },
                    style: { position: 'relative', width: 400, height: 52 },
                    dropdownStyle: { width: '100%' }
                }} content={dropDownContent}
                    onChange={(data) => {
                        console.log('TAg data:', data);
                        this.setState({ show: !this.state.show });
                    }}
                />
                <QbButton label="talksndonoadn3oqnwodnqowndoqnodiqhwpir"
                    style={{ width: 100 }}
                    className="btn btn-primary btn-lg"
                    clickHandler={() => this.setState({ showAlert: !this.state.showAlert })} />
                <QbCheckBox label="hello" id="hello" value={1} changeHandler={(value) => console.log('hello', value)} fontStyle={{ fontSize: 16 }} />
                <QbCheckBox label="hi" id="hi" value={2} changeHandler={(value) => console.log('hi', value)} fontStyle={{ fontSize: 16 }} />
                <QbRadio label="hello" name="1" value={1} changeHandler={(value) => console.log('hello', value)} fontStyle={{ fontSize: 16 }} />
                <QbRadio label="hi" name='1' value={2} changeHandler={(value) => console.log('hello', value)} fontStyle={{ fontSize: 16 }} />
                <QbInput placeHolder='e.g. math' size="small" changeHandler={(e) => alert(e.target.value)}>
                    <img alt="icon" src={SearchIcon} />
                </QbInput>
                <button onClick={this.alertMessage.bind(this)}>add</button>
                <QbModal target="azmodal" show={this.state.show}
                    afterHidden={() => { this.setState({ show: false }) }}
                    afterShown={() => { this.setState({ show: true }) }}>
                    <QbModalHeader>
                        <div>headerssss</div>
                    </QbModalHeader>
                    <QbModalBody>
                        <div>
                            <QbSwitcher switchState={this.state.switchState}
                                clickHandler={this.switchHandler.bind(this)} />
                        </div>
                    </QbModalBody>
                    <QbModalFooter>
                        <QbButton label="close" dataTarget="#modal" dataToggle='modal' />
                    </QbModalFooter>
                </QbModal>
                <QbTimePicker id="startPicker" onPickerClose={(time) => console.log('Tag time is:', time)}
                    option={{
                        btnStyle: { width: 100, height: 52, fontSize: 20 },
                        style: { width: 100 }
                    }} />
                <QbTimePicker id="endPicker" onPickerClose={(time) => console.log('Tag time is:', time)}
                    option={{
                        btnStyle: { width: 150, height: 52, fontSize: 20, justifyContent: 'center' },
                        displayMinute: true
                    }} />
                {/*/!* <QbClassCard {...classCardData2} /> *!/*/}
                {/* <QbAvatar user={{ name: 'Tom Zhu', avatar: '' }} size='big'></QbAvatar>
                <QbProgressBar compStyle={{ margin: '50px 0' }} percentage={'100%'} />
                <QbProgressBar showProgressText={true} compStyle={{ margin: '50px 0' }} percentage={'35%'} />
                <QbImgSection sectionType="English" style={{ 'height': '200px' }}></QbImgSection>
                <QbImgSection sectionType="science"></QbImgSection>

                <QbStar num="33"></QbStar>

                <QbScore score="1"></QbScore>
                <QbScore score="99"></QbScore>

                <QbScore score="1" content="over all" style={{ 'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px' }}></QbScore>
                <QbScore score="32" content="over all" style={{ 'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px' }}></QbScore>
                <h1>
                    My StudyPlan <QbHighlight content="Quesbook Web"></QbHighlight>
                </h1>


                npm

                <QbSwitcher switchState={this.state.switchState} clickHandler={this.switchHandler.bind(this)} />
                <QbButton label="show message"
                    className="btn btn-lg btn-primary"
                    clickHandler={this.messageToggle.bind(this)} />
                <QbMessageCard option={option}
                    title="hello!"
                    content="ha lou a !"
                    onCancelClick={this.messageToggle.bind(this)} />
                <QbSlider maxMark="$10+"
                    minMark="Free!"
                    maxPrice={15}
                    style={{ height: 100, width: 300 }}
                    changeHandler={this.sliderChange.bind(this)} />
                <QbCard cardStyle={{ height: 120, width: 500 }} avatarSrc={CloseIcon} rate={3.5} />
                
                <QbTabs>
                    <QbTab ref="hlo">
                        {list}
                    </QbTab>
                    <QbTab ref="bin">
                        <div>asd</div>
                    </QbTab>
                    <QbTab ref="ho" className="new" style={{ height: 50, overflowY: 'scroll' }}>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                        <div>xixiix</div>
                    </QbTab>`
                </QbTabs>
                <QbCollapse content={collapseContent}
                    panelStyle={{ color: '#ffffff', background: '#203a62' }} />
                <button onClick={() => {
                    QbAlert.error('title',
                        (<div>hello inhao jodhqwhbdlsjcn ijbib2ekwnijwienf l</div>),
                        100,
                        { fontWeight: 'bold' });
                }}>
                    booooo
                {/*</button> *!/*/}
            </div>
        )
    }
}
