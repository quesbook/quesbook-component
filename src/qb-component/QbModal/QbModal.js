/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/image/icon/x-icon@3x.png';

function noop() { }

const propTypes = {
    onClosed: PropTypes.func,
};

const defaultProps = {
    onClosed: noop,
};
class QbModal extends Component {
    constructor(props) {
        super(props);
        // const {target, afterHidden, afterShown} = this.props;
        // $(`#${target}`).on('hidden.bs.modal', function (e) {
        //     if (typeof afterHidden === 'function') {
        //         afterHidden();
        //     }
        // }).on('shown.bs.modal', function (e) {
        //     if (typeof afterShown === 'function') {
        //         afterShown();
        //     }
        // });
        this.onClosed = this.onClosed.bind(this); 
    }
    render() {
        const {target} = this.props;
        return (
            <div className="modal fade" id={target} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <img alt="closeBtn" src={CloseIcon}
                            data-dismiss='modal' aria-label="Close"
                            onClick={this.onClosed}
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

    onClosed() {        
        this.props.onClosed();
    }
}

QbModal.propTypes = propTypes;
QbModal.defaultProps = defaultProps;

export default QbModal;