import React, {Component} from 'react';
import './QbLayout.scss';
import QbHeader from '../QbHeader';
import QbFooter from '../QbFooter';
import gql from 'graphql-tag';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {QB_COMPONENT_GQL_URL, TOKEN_KEY, TOKEN_KEY_QB} from '../common/const';
import Cookies from 'js-cookie';

class QbLayout extends Component {
    constructor(props) {
        super(props);

        const {gqlUrl, route} = this.props;
        const GQL_URL = gqlUrl || (route
            ? route.gqlUrl
            : route) || QB_COMPONENT_GQL_URL;
        const networkInterface = createNetworkInterface({uri: GQL_URL});

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
        this.client = new ApolloClient({networkInterface});

        this.state = {
            currentUser: null,
            navItemList: {}
        };

    }

    componentWillMount() {
        this.client.query({query: gql `
          query {
              currentUser: current_user {
                id
                name
                avatar
                email
                first_name
                last_name
                exam_type_names
                type
              }
          }
        `, fetchPolicy: 'network-only'}).then((res) => {
            let navItemList = this.props.navItemList || this.props.route.navItemList;
            if (!res.data.currentUser) {
                window.location.href = '/home_page';
            } else {
                this.setState({currentUser: res.data.currentUser, navItemList: navItemList})
            }
        }).catch((e) => {
            console.info('currentUser none',e);
        });
    }

    componentWillReceiveProps(newProps) {
        let navItemList = newProps.navItemList || newProps.route.navItemList;

        this.setState({navItemList: navItemList});
    }

    onClick_Setting() {
        window.location.href = window.location.origin + '/start/#/setting';

        // let navItemList = this.state.navItemList;
        //
        // this.setState({
        //     navItemList: navItemList.slice(0, 1)
        // });
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

        const {gqlUrl, route} = this.props;
        const GQL_URL = gqlUrl || (route
            ? route.gqlUrl
            : route) || QB_COMPONENT_GQL_URL;

        // fetch(GQL_URL.replace('/graphql', '') + '/api/v1/user/sign_out', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/vnd.api+json',
        //         'Content-Type': 'application/vnd.api+json',
        //         Authorization: 'bearer ' + token,
        //     },
        //     credentials: 'include'
        // }).then(handleErrors).then(res => {
        //     console.log('success');
        //     Cookies.remove(TOKEN_KEY);
        //     Cookies.remove(TOKEN_KEY_QB);
        //     this.setState({currentUser: null});
        //     window.location.href = '/home_page';
        //     return res.data;
        // }).catch(error => {
        //     alert('sign out error!');
        //     console.log(error);
        // });
        fetch(GQL_URL.replace('/graphql', '') + '/users/sign_out', {
            method: 'DELETE',
            credentials: 'include'
        }).then(handleErrors).then(res => {
            console.log('success');
            Cookies.remove(TOKEN_KEY);
            Cookies.remove(TOKEN_KEY_QB);
            this.setState({currentUser: null});
            window.location.href = '/home_page';
            return res.data;
        }).catch(error => {
            alert('sign out error!');
            console.log(error);
        });
    }

    render() {
        const {messageId} = this.props;
        let currentUser = this.state.currentUser;
        let styleNoLogin;

        if (!currentUser) {
            styleNoLogin = {
                marginTop: '50px'
            };
        }

        return (
            <div className="layout-ct">
                <QbHeader messageId={messageId} client={this.client} currentUser={currentUser} navItemList={this.state.navItemList} onClick_SignOut={this.onClick_SignOut.bind(this)} onClick_MyClass={this.onClick_MyClass.bind(this)} onClick_Setting={this.onClick_Setting.bind(this)}/>
                <div className="body-content" style={styleNoLogin}>
                    {this.props.children}
                </div>
                <QbFooter/>
            </div>
        );
    }
}

export default QbLayout;
