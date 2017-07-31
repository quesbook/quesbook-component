/**
 * Created by az on 2017/7/28.
 */
import React, {Component} from 'react';
import RateStar from '../common/RateStar';

/*eslint-disable*/
class QbCard extends Component {
    render() {
        const {cardStyle, avatarSrc} = this.props;
        return (
            <div style={{...style.card, ...cardStyle}}>
                <div style={style.leftFrame}>
                    <img src={avatarSrc}/>
                </div>
                <div style={style.rightFrame}>
                    <div style={style.classTitle}>asdn</div>
                    <div style={style.priceAndTime}>
                        <div style={style.price}>$666</div>
                        <div style={style.time}>120912321</div>
                    </div>
                    <div style={style.ratingAndName}>
                        <div style={style.tutorName}>asdasd</div>
                        <div style={style.rating}>
                            <RateStar rate={3.1 * 20}/>
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
        height: 100,
        width: 500,
    },
    leftFrame: {
        height: '100%',
        width: 68,
    },
    rightFrame: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '9px 15px 9px 12px',
    },
    classTitle: {

    },
    priceAndTime: {
        display: 'flex',
        flexDirection: 'row',
    },
    price: {

    },
    time: {

    },
    ratingAndName: {
        display: 'flex',
        flexDirection: 'row',
    },
    rating: {

    },
    tutorName: {

    },
}

export default QbCard;
