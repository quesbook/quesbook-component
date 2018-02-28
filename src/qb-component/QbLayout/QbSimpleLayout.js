import React, { Component } from 'react';
import './QbLayout.scss';
import { QbSimpleHeader } from '../QbHeader';
import QbFooter from '../QbFooter';
import gql from 'graphql-tag';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {QB_COMPONENT_GQL_URL, TOKEN_KEY, TOKEN_KEY_QB} from '../common/const';
import Cookies from 'js-cookie';

class QbSimpleLayout extends Component {
    constructor(props) {
        super(props);

        const {gqlUrl, route} = this.props;
        const GQL_URL = gqlUrl || (route ? route.gqlUrl : route) || QB_COMPONENT_GQL_URL;
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
              }
          }
        `, fetchPolicy: 'network-only'}).then((res) => {
            this.setState({currentUser: res.data.currentUser})
        }).catch((e) => {
            console.info(e);
        });
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="layout-ct">
                <QbSimpleHeader
                    currentUser={currentUser}
                    onClick_SignOut={this.onClick_SignOut.bind(this)}
                    onClick_Setting={this.onClick_Setting.bind(this)}
                />
                <div className="body-content-simple">
                    {this.props.children}
                </div>
                <QbFooter/>
            </div>
        );
    }

    onClick_Setting() {
        window.location.href = window.location.origin + '/start/#/setting';
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
        const GQL_URL = gqlUrl || (route ? route.gqlUrl : route) || QB_COMPONENT_GQL_URL;

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
}

export default QbSimpleLayout;
