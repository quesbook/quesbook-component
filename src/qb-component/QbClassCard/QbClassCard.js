import React, { Component, PropTypes } from 'react';
import QbImgSection from '../QbImgSection';
import QbButton from '../QbButton';

import './QbClassCard.scss';

const btnStyle = {
    width: '100%'
};

class QbClassCard extends Component {


    constructor() {
        super(...arguments);
        this.onClickCard = this.onClickCard.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);

    }

    componentWillMount() {

    }

    onClickCard() {
        let { onClickCard } = this.props;
        if (typeof onClickCard === 'function') {
            onClickCard();
        }
    }

    onClickBtn() {
        let { onClickBtn } = this.props;
        if (typeof onClickBtn === 'function') {
            onClickBtn();
        }
    }

    render() {
        let { sectionName,
            courseName,
            description,
            skillName,
            expand,
            disabled,
            compClass,
            compStyle,
            btnText,
            startsAt } = this.props;
        let displayStyle = {
            display: expand ? 'flex' : 'none'
        };
        return (
            <div className={`qb-class-card ${compClass}`} style={compStyle} onClick={this.onClickCard}>
                <div className="sec-class-detial">
                    <div className="left-img">
                        {
                            sectionName && <QbImgSection sectionType={sectionName} style={{ 'height': '32px' }} />
                        }
                    </div>
                    <div className="right-content">
                        <h5>{courseName}</h5>
                        <h6>{skillName}</h6>
                        <h6>{startsAt}</h6>
                        <p style={displayStyle}>{description}</p>
                    </div>
                </div>
                <div className="sec-buttons" style={displayStyle}>
                    <QbButton
                        label={btnText}
                        style={btnStyle}
                        fontStyle={{ fontSize: '20px' }}
                        className={'btn btn-primary'}
                        size="large"
                        clickHandler={this.onClickBtn}
                        disabled={disabled}
                    />
                    {/*Temporary hiding details button*/}
                    {/*<a to={'/test/math'} style={linkStyle}>
                        <QbButton
                            label={'See class detail'}
                            style={btnStyle}
                            fontStyle={{ fontSize: '20px' }}
                            className={'btn btn-secondary'}
                            size="large"
                        />
                    </a>*/}
                </div>
            </div>
        );
    }
}

QbClassCard.propTypes = {
    compClass: PropTypes.string,
    compStyle: PropTypes.object,
    sectionName: PropTypes.string,
    courseName: PropTypes.string,
    startsAt: PropTypes.string,
    description: PropTypes.string,
    skillName: PropTypes.string,
    btnText: PropTypes.string,
    expand: PropTypes.bool,
    disabled: PropTypes.bool,
    onClickCard: PropTypes.func,
    onClickBtn: PropTypes.func
};

QbClassCard.defaultProps = {
    btnText: '',
    compClass: null,
    compStyle: null,
    expand: false,
    disabled: false,
    sectionName: 'math',
    courseName: 'E-Class for Opening, Transitional & Closing Sentences',
    startsAt: 'Jan. 15th at 5PM',
    description: 'Take this e-class to learn the important elements that go into writing and identifying effective paragraphs made up of opening, transitional and closing sentences. This class will teach you how to master this skill for the ACT',
    skillName: 'Analyzing Function'
};

export default QbClassCard;
