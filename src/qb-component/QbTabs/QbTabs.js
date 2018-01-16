/**
 * Created by az on 2017/8/7.
 */
import React, {Component} from 'react';
import './QbTabs.scss';

class QbTabs extends Component {
    constructor(props) {
        super(props);
        let tabsMap = new Map();
        for (let tab of props.children) {
            tabsMap.set(tab.ref, tab);
        }
        this.state= {
            selectedTab: props.children[0].ref,
            tabs: tabsMap,
        }
    }
    tabClick(e) {
        this.setState({
            selectedTab: e.target.textContent
        })
    }
    componentWillReceiveProps(nextProps) {
        let tabsMap = new Map();
        for (let tab of nextProps.children) {
            tabsMap.set(tab.ref, tab);
        }
        this.setState({
            tabs: tabsMap,
        })
    }
    renderTabs() {
        const {tabStyle} = this.props;
        let tabs= [];
        for (let tabKey of this.state.tabs.keys()) {
            let selectedStyle = {};
            if (this.state.selectedTab === tabKey) {
                selectedStyle = {opacity: 1}
            }
            tabs.push(<div key={tabKey} style={{...style.tab, ...selectedStyle, ...tabStyle}}
                           onClick={this.tabClick.bind(this)} value={tabKey}>{tabKey}</div>);
        }
        return tabs;
    }
    render() {
        const {frameStyle, tabsStyle, contentStyle} = this.props;
        let tabs = this.renderTabs();
        let content = this.state.tabs.get(this.state.selectedTab);
        console.log('Tag tabs render: ');
        return (
            <div style={{...style.frame, ...frameStyle}}>
                <div style={{...style.tabs, ...tabsStyle}}>{tabs}</div>
                <div className="qb-component-tabs" style={{...style.content, ...contentStyle}}>
                    {content}
                </div>
            </div>
        );
    }
}

const style = {
    frame: {
        width: 300,
        background: '#203a62',
        display: 'flex',
        flexDirection: 'column',
    },
    tabs: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        background: '#203a62',
    },
    tab: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontFamily: 'Gotham Narrow A, Gotham Narrow B',
        justifyContent: 'center',
        background: '#203a62',
        color: '#ffffff',
        opacity: 0.4,
    },
    content: {
        background: '#203a62',
        margin: '0 15px',
        padding: '15px 0',
        borderTop: 'solid 1px rgba(255, 255, 255, 0.3)',
    }
};

export default QbTabs;