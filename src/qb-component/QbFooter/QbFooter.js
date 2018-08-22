import React, { Component } from 'react';
import './QbFooter.scss';
import logo from '../assets/image/logo/light-condensed.png';

class QbFooter extends Component {
    render() {
        return (
            <footer>
                <div className="footer-ct">
                    <ul className='box-a-nostyle box-flex'>
                        <li className='logo'>
                            <a href="/home_page">
                                <img src={logo} alt="" />
                            </a>
                        </li>
                        <li className='copy-right box-font-narrow'>
                            <div>
                                <div>&copy; {(new Date()).getFullYear()} Quesbook USA, Inc.</div>
                                <div style={{opacity: 0.5}}>575 5th Avenue</div>
                                <div style={{opacity: 0.5}}>New York, NY 10017</div>
                            </div>
                        </li>
                        <li className='footer-right'>
                            <a href="mailto:help@quesbook.com?Subject=Help!">Help</a>
                        </li>
                        <li className='footer-right'>
                            <a href="mailto:help@quesbook.com?Subject=Help!">Contact</a>
                        </li>
                        <li className='footer-right'>
                             <a href={`${window.location.origin}/start/#/terms/refundPolicy`}>Refund Policy</a>
                        </li>
                        <li className='footer-right'>
                             <a href={`${window.location.origin}/start/#/terms/termofService`}>Terms of use</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default QbFooter;
