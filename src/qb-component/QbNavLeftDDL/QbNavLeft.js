import React, {Component} from 'react';
import './index.scss';

let params,
    itemList,
    queryStrName,
    selItem;

class QbNavLeft extends Component {
    render() {
        params = this.props.params;
        itemList = params.itemList;
        queryStrName = params.queryStrName;

        // let selItemKey = (new URLSearchParams(this.context.location.search)).get(queryStrName);
        let selItemKey = this.context.location.query[queryStrName];
        if (itemList.length > 0) {
            selItem = itemList.find(item => item.key === selItemKey);
            if (!selItemKey) {
                selItem = itemList[0];
            }
        }
        return (
            <div className="section-navleft box-list">
                {this.renderLeftNavList(itemList, selItem)}
            </div>
        );
    }

    renderLeftNavList(list, selItem) {
        let array = list;
        let ret = [];

        ret = array.map((item, index) => {
            return (
                <li className="section-navleft-item box-cursor" onClick={this.onClick_LeftNavList.bind(this, item)} key={index}>
                    {this.renderLeftNavItem(item, selItem)}
                </li>
            )
        });

        return (
            <ul>
                {ret}
            </ul>
        );
    }

    renderLeftNavItem(item, selItem) {
        if (item.key === selItem.key) {
            return (
                <span>
                    <strong>{item.value}</strong>
                </span>
            );
        } else {
            return (
                <span>{item.value}</span>
            );
        }
    }

    onClick_LeftNavList(selItem) {
        if (selItem.isRedirect) {
            window.location.href = window.location.origin + selItem.href;
        } else {
            let url = `${selItem.href}?${queryStrName}=${selItem.key}`;
            this.context.router.push(url);
        }
    }

    componentWillMount() {
        console.log('Nav Left componentWillMount');

        //
        // if (!selItemKey && selItem) {
        //     let url = `${selItem.href}?${queryStrName}=${selItem.key}`;
        //     this.context.router.push(url);
        // }
    }
}

export default QbNavLeft;

QbNavLeft.contextTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object
}
