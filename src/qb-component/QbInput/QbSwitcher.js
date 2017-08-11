/**
 * Created by az on 2017/7/18.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbSwitcher extends Component {
    renderCircle(circleDiameter, bar) {
        const {switchState} = this.props;
        if (!switchState) {
            return (
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: -(circleDiameter - bar.height)/2,
                    width: circleDiameter,
                    height: circleDiameter,
                    backgroundColor: '#cccccc',
                    border: 'solid 1px #cccccc',
                    borderRadius: 100
                }}/>
            )
        } else {
            return (
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: -(circleDiameter - bar.height)/2,
                    width: circleDiameter,
                    height: circleDiameter,
                    backgroundColor: '#192230',
                    border: 'solid 1px #192230',
                    borderRadius: 100
                }}/>
            )
        }
    }
    render() {
        console.log('TAg render');
        const {diameter, barStyle, clickHandler} = this.props;
        let circleDiameter = diameter?diameter:14;
        let bar = barStyle?{width: barStyle.width, height: barStyle.height}: {width: 24, height: 8};
        let circle = this.renderCircle(circleDiameter, bar);
        return (
            <div style={{position: 'relative', width: bar.width}} onClick={()=> {
                console.log('Tg click again');
                clickHandler();
            }}>
                <div style={{
                    height: bar.height,
                    width: '100%',
                    borderRadius: 100,
                    backgroundColor: '#e8e8ea',
                }}>
                </div>
                {circle}
            </div>
        );
    }
}

export default QbSwitcher;