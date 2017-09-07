import React, { Component } from 'react';
import './QbFooter.scss';
import logo from '../assets/image/logo/light-condensed.png';

class QbFooter extends Component {
    render() {
        // let logo;
        return (
            <footer>
                <ul>
                    <li>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Help</a>
                    </li>
                    <li>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Contact</a>
                    </li>
                    <li className='logo'>
                        <a href="/home_page">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="//stg.quesbook.com/start/#/terms/">Terms of use</a>
                    </li>
                    <li className='copy-right'>
                        &copy; {new Date().getFullYear()} Quesbook USA, Inc.
                    </li>
                </ul>
            </footer>
        );
    }
}

export default QbFooter;
