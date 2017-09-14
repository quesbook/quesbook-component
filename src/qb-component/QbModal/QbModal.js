/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
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
        const {target, show} = this.props;
        if (show) {
            $('#'+ target).modal('show');
        } else {
            $('#'+ target).modal('hide');
        }
        return (
            <div className="modal fade" id={target} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default QbModal;