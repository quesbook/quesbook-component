/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import CloseIcon from '../assets/image/icon/x-icon@3x.png';

/*eslint-disable*/
class QbModal extends Component {
    constructor(props) {
        super(props);
        const {target, afterHidden, afterShown} = this.props;
        $('#'+ target).on('hidden.bs.modal', function (e) {
            afterHidden();
        }).on('shown.bs.modal', function (e) {
            afterShown();
        });
    }
    render() {
        const {target} = this.props;
        return (
            <div className="modal fade" id={target} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <img alt="closeBtn" src={CloseIcon}
                            data-target={'#'+target} data-toggle='modal'
                            style={{position: 'absolute', right: 15, top: 20, height: 15, width: 15}}/>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const {target, show} = this.props;
        if (show) {
            $('#'+ target).modal('show');
        } else {
            $('#'+ target).modal('hide');
        }
    }
}

export default QbModal;