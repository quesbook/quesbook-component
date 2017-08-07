/**
 * Created by az on 2017/8/7.
 */
import React, {Component} from 'react';

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
        console.log('Tag click e:', e.target, e.target.textContent);
        this.setState({
            selectedTab: e.target.textContent
        })
    }
    renderTabs() {
        console.log('Tag map:', this.state.tabs.keys());
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
        const {frameStyle, tabsStyle} = this.props;
        let tabs = this.renderTabs();
        let content = this.state.tabs.get(this.state.selectedTab);
        return (
            <div style={{...style.frame, ...frameStyle}}>
                <div style={{...style.tabs, ...tabsStyle}}>{tabs}</div>
                <div style={style.content}>
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