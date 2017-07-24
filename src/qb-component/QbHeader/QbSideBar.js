import React, {Component} from 'react';
import './QbSideBar.scss';

class QbSideBar extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
            isShow: false
        };
    }

    componentWillMount() {
        let currentUser = this.props.currentUser;
        let isShow = false;
        if (currentUser) {
            isShow = this.props.isShow;
        }

        this.setState({currentUser: currentUser, isShow: isShow})
    }

    componentWillReceiveProps(newProps) {
        let currentUser = newProps.currentUser;
        let isShow = false;
        if (currentUser) {
            isShow = newProps.isShow;
        }
        this.setState({currentUser: currentUser, isShow: isShow});
    }

    onClick_SignOut() {
        this.props.onClick_SignOut();
        this.hideNavSideBar();
    }

    hideNavSideBar() {
        this.setState({isShow: false});
    }

    renderUserExamSection(currentUser) {
        if (currentUser) {
            let currentUserExamList = currentUser.exam_type_names;
            let examItemList = currentUserExamList.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                );
            });

            return (
                <div className='col-lg-12 section-exam'>
                    <div className='title'>
                        My tests
                    </div>
                    {examItemList}
                </div>
            );
        }
    }

    renderUserIconSection(currentUser) {
        if (currentUser) {
            return (
                <div className="row no-gutters col-lg-12 navbarside-user">
                    <div className="icon">
                        <div>
                            {currentUser.name.charAt(0)}
                        </div>
                    </div>
                    <div className="text">{currentUser.name}</div>
                    <div className="close" onClick={this.hideNavSideBar.bind(this)}>
                        <span aria-hidden="true">×</span>
                    </div>
                </div>
            );
        }
    }

    render() {
        let currentUser = this.state.currentUser;

        return (
            <div className="section-ct-navbarside">
                <div className="col-4 col-md-8 col-lg-12 navbarside-cover" hidden={!this.state.isShow} onClick={this.hideNavSideBar} onMouseOver={this.hideNavSideBar.bind(this)}></div>
                <div className='no-gutters col-lg-2 navbarside-section' hidden={!this.state.isShow}>
                    <div className="no-gutters col-8 col-md-4 col-lg-2 navbarside-content">
                        {this.renderUserIconSection(currentUser)}
                        {this.renderUserExamSection(currentUser)}
                        <div className='col-lg-12 section-user'>
                            <div>
                                <a href='/profile'>My Account</a>
                            </div>
                            <div onClick={this.onClick_SignOut.bind(this)}>Log out</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QbSideBar;
