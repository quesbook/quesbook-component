import React, { Component, PropTypes } from 'react';
import QbImgSection from '../QbImgSection';
import QbButton from '../QbButton';

import { COLOR } from '../common/const';

const style = {
    root: {
        padding: '30px 15px',
        backgroundColor: '#fff',
        border: 'solid 1px rgba(25, 34, 48, 0.1)',
        borderRadius: 4,
        marginBottom: 15
    },
    secDetail: {
        display: 'flex'
    },
    secCustom: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        fontFamily: "Gotham Narrow A, Gotham Narrow B",
        fontWeight: 'bold'
    },
    contentStyle: {
        fontSize: 16
    }
}

class QbEClassCard extends Component {


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

    get displayStyle() {
        return {
            display: this.props.expand ? 'flex' : 'none'
        }
    }

    render() {
        let { sectionName,
            courseName,
            description,
            skillName,
            disabled,
            compClass,
            compStyle,
            btnText,
            startsAt } = this.props;
        return (
            <div className={`qb-class-card ${compClass}`} style={{ ...style.root, ...compStyle }} onClick={this.onClickCard}>
                <div className="sec-class-detial" style={style.secDetail}>
                    <div className="left-img">
                        {
                            sectionName && <QbImgSection sectionType={sectionName} style={{ 'height': '32px' }} />
                        }
                    </div>
                    <div className="right-content" style={{ marginLeft: 20 }}>
                        <h5 style={style.header}>{courseName}</h5>
                        <h6 style={{ ...style.header, opacity: 0.5 }}>{skillName}</h6>
                        <h6 style={{ ...style.header, color: COLOR.sky }}>{startsAt}</h6>
                        <p style={{ ...style.contentStyle, ...this.displayStyle }}>{description}</p>
                    </div>
                </div>
                <div className="sec-custom" style={{ ...style.secCustom, ...this.displayStyle }}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}

QbEClassCard.propTypes = {
    compClass: PropTypes.string,
    compStyle: PropTypes.object,
    sectionName: PropTypes.string,
    courseName: PropTypes.string,
    startsAt: PropTypes.string,
    description: PropTypes.string,
    skillName: PropTypes.string,
    onClickCard: PropTypes.func,
    expand: PropTypes.bool,
    children: PropTypes.node
};

QbEClassCard.defaultProps = {
    expand: false,
    btnText: '',
    compClass: null,
    compStyle: null,
    sectionName: 'math',
    courseName: 'E-Class for Opening, Transitional & Closing Sentences',
    startsAt: 'Jan. 15th at 5PM',
    description: 'Take this e-class to learn the important elements that go into writing and identifying effective paragraphs made up of opening, transitional and closing sentences. This class will teach you how to master this skill for the ACT',
    skillName: 'Analyzing Function'
};

export default QbEClassCard;
