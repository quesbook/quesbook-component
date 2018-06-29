import React, {Component} from 'react';
import imgEng from '../assets/image/icon/illustration-english.svg';
import imgMath from '../assets/image/icon/illustration-math.svg';
import imgReading from '../assets/image/icon/illustration-reading.svg';
import imgScience from '../assets/image/icon/illustration-science.svg';

// props:  num, style
// Example
// <QbImgSection sectionType="Math" style={{'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px'}}></QbImgSection>
class QbImgSection extends Component {
    render() {
        let sectionType = this.props.sectionType.toUpperCase();
        let style = this.props.style;

        switch (sectionType) {
            case 'ENGLISH':
                return (<img src={imgEng} style={style} alt={sectionType}/>);
                break;
            case 'MATH':
                return (<img src={imgMath} style={style} alt={sectionType}/>);
                break;
            case 'READINGWRITING':
            case 'READING':
                return (<img src={imgReading} style={style} alt={sectionType}/>);
                break;
            case 'SCIENCE':
                return (<img src={imgScience} style={style} alt={sectionType}/>);
                break;
            default:
                return (
                    <div></div>
                );
        }

    }
}

export default QbImgSection;
