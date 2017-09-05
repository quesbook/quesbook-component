import React, {Component} from 'react';
import './QbFooter.scss';
import logo from '../assets/image/logo/light-condensed.png';

class QbFooter extends Component {
    render() {
        // let logo;
        return (
            <footer>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/help">Help</a>
                    </li>
                    <li>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Contact us!</a>
                    </li>
                    <li className='logo'>
                        <img src={logo} alt=""/>
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
