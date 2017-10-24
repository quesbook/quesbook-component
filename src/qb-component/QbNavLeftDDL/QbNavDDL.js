import React, {Component} from 'react';
import {QbDropDown} from '../QbDropDown';
import './index.scss';

let params,
    itemList,
    queryStrName,
    selItem;

class QbNavDDL extends Component {
    render() {
        params = this.props.params;
        itemList = params.itemList;
        queryStrName = params.queryStrName;

        let selItemKey = (new URLSearchParams(this.context.location.search)).get(queryStrName);
        if (itemList.length > 0) {
            selItem = itemList.find(item => item.key === selItemKey);
            if (!selItemKey) {
                selItem = itemList[0];
            }
        }

        return (
            <div className="section-navddl">
                {this.renderLeftNavDDL(itemList, selItem)}
            </div>
        );
    }

    renderLeftNavDDL(list, selItem) {
        let dropDownContent = list.map((item, index) => {
            return {'label': item.key, 'value': item.value};
        });
        let defaultData = {
            label: selItem.key,
            value: selItem.value
        };

        return (<QbDropDown defaultData={defaultData} default
            option={{
            inputType: 'button',
            btnStyle: {
                width: '100%',
            },
            dropdownStyle: {
                width: '100%',
                fontFamily: 'Gotham A,Gotham B'
            },
            style: {
                width: '100%',
                height: '52px'
            }
        }} content ={dropDownContent} onChange={this.onChange_DDL}/>);
    }

    onChange_DDL = (data) => {
        let selItem = itemList.find(item => item.key === data.label);
        if (selItem.isRedirect) {
            window.location.href = window.location.origin + selItem.href;
        } else {
            let url = `${selItem.href}?${queryStrName}=${selItem.key}`;
            this.context.router.push(url);
        }
    }
}

export default QbNavDDL;

QbNavDDL.contextTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object
}
