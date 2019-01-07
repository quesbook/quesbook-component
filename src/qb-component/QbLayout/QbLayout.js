import React, { Component } from 'react';
import './QbLayout.scss';
import QbHeader from '../QbHeader';
import QbFooter from '../QbFooter';
import gql from 'graphql-tag';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { QB_COMPONENT_GQL_URL, TOKEN_KEY, TOKEN_KEY_QB, HOME_PAGE, DEFAULT_FOLDER, TUTOR_ADMIN, ALLOWED_TYPES } from '../common/const';
import Cookies from 'js-cookie';
import iconLoading from '../assets/image/icon/loading.gif';

class QbLayout extends Component {
    constructor(props) {
        super(props);

        const { gqlUrl, route } = this.props;
        const GQL_URL = gqlUrl || (route
            ? route.gqlUrl
            : route) || QB_COMPONENT_GQL_URL;
        const networkInterface = createNetworkInterface({ uri: GQL_URL });

        networkInterface.use([
            {
                applyMiddleware(req, next) {
                    if (!req.options.headers) {
                        req.options.headers = {}; // Create the header object if needed.
                    }
                    // get the authentication token from cookies if it exists, waiting for fix
                    const token = Cookies.get(TOKEN_KEY);
                    req.options.headers.authorization = token
                        ? `bearer ${token}`
                        : '';
                    next();
                }
            }
        ]);
        this.client = new ApolloClient({ networkInterface });

        this.state = {
            currentUser: null,
            navItemList: {},
            isShowLoading: false
        };

    }

    componentWillMount() {
        this.client.query({
            query: gql`
          query {
              currentUser: current_user {
                id
                name
                avatar
                email
                first_name
                last_name
                exam_type_names
                avg_tutor_rating
                type
                one_of_section_part1_finished
                current_test
              }
          }
        `, fetchPolicy: 'network-only'
        }).then((res) => {
            let navItemList = this.props.navItemList || this.props.route.navItemList;
            let currentUser = res.data.currentUser;
            let pathname = window.location.pathname;
            if (!currentUser && pathname !== HOME_PAGE && window.location.href.indexOf("eclass") !== -1) {
                this.navHomePage();
            } else if (pathname.indexOf(TUTOR_ADMIN) !== -1 && !ALLOWED_TYPES.includes(currentUser.type)) {
                this.navHomePage();
            } else {
                const self = this;
                this.setState({ currentUser, navItemList }, () => {
                    console.log("<--- Qblayout this props ---->", self.props);
                    if (self.props.route) {
                        const { doSthWhenFetchUserSuccess } = self.props.route;
                        if (typeof doSthWhenFetchUserSuccess === 'function') {
                            doSthWhenFetchUserSuccess(currentUser);
                        }
                    }
                });
            }
        }).catch((e) => {
            this.navHomePage();
            console.info('currentUser none', e);
        });
    }

    componentWillReceiveProps(newProps) {
        let navItemList = newProps.navItemList || newProps.route.navItemList;

        this.setState({ navItemList: navItemList });
    }

    navHomePage = () => {
        if (!this.state.isShowLoading) {
            this.setState({ isShowLoading: true });

            if (window.location.hostname !== 'localhost') {
              window.location.href = HOME_PAGE;
            }
        }
    }

    onClick_Setting(userType) {
        window.location.href = window.location.origin + `${DEFAULT_FOLDER}/#/setting`;
        // switch (userType) {
        //     case 'Student':
        //         window.location.href = window.location.origin + `${DEFAULT_FOLDER}/#/setting`;
        //         break;
        //     case 'Tutor':
        //         window.location.href = window.location.origin + `${DEFAULT_FOLDER}/#/settingTutor`;
        //         break;
        //     default:
        //         window.location.href = window.location.origin + `${DEFAULT_FOLDER}/#/setting`;
        // }
    }

    onClick_MyClass() {
        window.location.href = window.location.origin + '/start/#/myClasses';
    }

    onClick_SignOut() {

        let token = Cookies.get(TOKEN_KEY);

        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        const { gqlUrl, route } = this.props;
        const GQL_URL = gqlUrl || (route
            ? route.gqlUrl
            : route) || QB_COMPONENT_GQL_URL;

        fetch(GQL_URL.replace('/graphql', '') + '/users/sign_out', {
            method: 'DELETE',
            credentials: 'include'
        }).then(handleErrors).then(res => {
            console.log('success');
            Cookies.remove(TOKEN_KEY);
            Cookies.remove(TOKEN_KEY_QB);
            this.setState({ currentUser: null });
            this.navHomePage();
            return res.data;
        }).catch(error => {
            alert('sign out error!');
            console.log(error);
        });
    }

    sendTimeOnPlatform(time){
        let token = Cookies.get(TOKEN_KEY);
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        const { gqlUrl, route } = this.props;
        const GQL_URL = gqlUrl || (route
            ? route.gqlUrl
            : route) || QB_COMPONENT_GQL_URL;
        
        fetch(GQL_URL.replace('/graphql', '') + '/api/v1/time_on_platform', {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                Authorization: 'bearer ' + token
            },
            body: JSON.stringify({"total_time": {"time_on_platform": time}})
        }).then(handleErrors).then(res => {
            console.log('success');
            return res.data;
        }).catch(error => {
            console.log(error);
        });

    }

    renderLoading() {
        if (this.state.isShowLoading) {
            return (
                <div className='box-flex-center' style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    opacity: '0.8',
                    backgroundColor: '#fff',
                    zIndex: '999'
                }}>
                    <img style={{
                        margin: 'auto'
                    }} src={iconLoading} alt="" />
                </div>
            );
        }
    }

    render() {
        const { messageId } = this.props;
        let currentUser = this.state.currentUser;
        let styleNoLogin;

        if (!currentUser) {
            styleNoLogin = {
                marginTop: '50px'
            };
        }

        return (
            <div className="layout-ct">
                {this.renderLoading()}
                <QbHeader
                    messageId={messageId}
                    client={this.client}
                    currentUser={currentUser}
                    navItemList={this.state.navItemList}
                    onClick_SignOut={this.onClick_SignOut.bind(this)}
                    onClick_MyClass={this.onClick_MyClass.bind(this)}
                    onClick_Setting={this.onClick_Setting.bind(this)}
                    sendTimeOnPlatform={this.sendTimeOnPlatform.bind(this)}
                    updateUser={this.props.route.updateUser}
                />
                <div className="body-content" style={styleNoLogin}>
                    {this.props.children}
                </div>
                <QbFooter />
            </div>
        );
    }
}

export default QbLayout;
