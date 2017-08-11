/**
 * Created by az on 2017/8/9.
 */
import React, {Component} from 'react';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
const Panel = Collapse.Panel;
import './QbCollapse.scss';

class QbCollapse extends Component {
    render() {
        const {style, content, panelStyle} = this.props;
        let contentList = content.map((data, index)=> {
            return (
                <Panel style={{...defaultStyle.public, ...panelStyle}}
                       header={data.header} key={index} showArrow={false}>
                    {data.content}
                </Panel>
            );
        });
        return (
            <Collapse  style={{...defaultStyle.public, ...style}} accordion={true}>
                {contentList}
            </Collapse>
        )
    }
}

const defaultStyle= {
    public: {
        background: '#203a62',
        border: 0,
        color: '#ffffff',
        borderRadius: 0,
    },
    content: {

    }
};


export default QbCollapse;