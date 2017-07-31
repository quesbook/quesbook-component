/**
 * Created by az on 2017/7/28.
 */
import React, {Component} from 'react';
import RateStar from '../common/RateStar';

/*eslint-disable*/
class QbCard extends Component {
    render() {
        const {cardStyle, avatarSrc, rate} = this.props;
        return (
            <div style={{...style.card, ...cardStyle}}>
                <div style={style.leftFrame}>
                    <img src={avatarSrc}/>
                </div>
                <div style={style.rightFrame}>
                    <div style={style.classTitle}>asdasmd koamo kmo jm osdjonqc dqwj dncpian apdijcn pdj pfidf n</div>
                    <div style={style.priceAndTime}>
                        <div style={style.time}>120912321</div>
                        <div style={style.price}>$666</div>
                    </div>
                    <div style={style.ratingAndName}>
                        <div style={style.tutorName}>asda joisdd</div>
                        <div style={style.rating}>
                            <RateStar rate={rate * 20}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 4,
        boxShadow: '0 2px 20px 0 rgba(25, 34, 48, 0.27)',
    },
    leftFrame: {
        height: '100%',
        width: 68,
        border: 0,
    },
    rightFrame: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '9px 15px 9px 12px',
    },
    classTitle: {
        fontFamily: 'GothamNarrow',
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 1.2,
        color: '#192230',
    },
    priceAndTime: {
        display: 'flex',
        flexDirection: 'row',
    },
    price: {
        fontFamily: 'Gotham-Book',
        fontSize: 14.4,
        lineHeight: 1.5,
        color: '#5d90e3',
        marginLeft: 10,
    },
    time: {
        fontFamily: 'Gotham-Book',
        fontSize: 14.4,
        lineHeight: 1.5,
        color: '#5d90e3',
    },
    ratingAndName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 10,
    },
    tutorName: {
        fontFamily: 'Gotham-Book',
        fontSize: 14.4,
        lineHeight: 1.5,
        color: '#192230',
    },
}

export default QbCard;
