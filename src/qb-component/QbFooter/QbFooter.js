import React, { Component } from 'react';
import './QbFooter.scss';
import logo from '../assets/image/logo/light-condensed.png';

class QbFooter extends Component {
    render() {
        // let logo;
        return (
            <footer>
                <ul className='box-a-nostyle'>
                    <li className='footer-left'>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Help</a>
                    </li>
                    <li className='footer-left'>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Contact</a>
                    </li>
                    <li className='logo'>
                        <a href="/home_page">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className='footer-right'>
                         <a href={`${window.location.origin}/start/#/terms/refundPolicy`}>Refund Policy</a>
                    </li>
                    <li className='footer-right'>
                         <a href={`${window.location.origin}/start/#/terms/termofService`}>Terms of use</a>
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
